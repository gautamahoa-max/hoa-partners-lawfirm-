import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase.js';
import { sanitizeInput, isValidPhone } from '../utils/security.js';

export const CONSULTATION_STATUSES = ['new', 'contacted', 'in_progress', 'completed'];
export const CONSENT_DOCUMENT_VERSION = 'HP-PDPL-02/2026';

const COLLECTION_NAME = 'consultations';
const SUBMIT_TIMEOUT_MS = 10000;
const RETRY_DELAY_MS = 400;
const ISO_TIMESTAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
const NON_RETRYABLE_CODES = new Set([
  'validation/invalid-input',
  'permission-denied',
  'invalid-argument',
  'unauthenticated',
  'failed-precondition',
]);

/**
 * Normalize consent evidence fields stored alongside a consultation (Law 91/2025/QH15 Art. 9.3).
 */
export function buildConsentAuditFields({ consentVersion, consentAcceptedAt } = {}) {
  const cleanVersion =
    sanitizeInput(consentVersion || CONSENT_DOCUMENT_VERSION, 50).trim() || CONSENT_DOCUMENT_VERSION;
  const trimmedTime = typeof consentAcceptedAt === 'string' ? consentAcceptedAt.trim() : '';
  const cleanAcceptedAt =
    trimmedTime.length > 0 && trimmedTime.length <= 50 && ISO_TIMESTAMP_RE.test(trimmedTime)
      ? trimmedTime
      : new Date().toISOString();

  return {
    consentVersion: cleanVersion,
    consentAcceptedAt: cleanAcceptedAt,
  };
}

function createValidationError(message) {
  const err = new Error(message);
  err.code = 'validation/invalid-input';
  return err;
}

function withTimeout(promise, ms) {
  let timerId;
  const timeoutPromise = new Promise((_, reject) => {
    timerId = setTimeout(() => {
      const err = new Error(`Request timed out after ${ms}ms`);
      err.code = 'deadline-exceeded';
      reject(err);
    }, ms);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timerId));
}

function isRetryable(err) {
  return !NON_RETRYABLE_CODES.has(err?.code);
}

/**
 * Sanitize, validate, and submit a consultation inquiry with 10s timeout and 1 transient retry.
 */
export async function submitConsultation({
  fullName,
  phone,
  notes,
  lang,
  consent,
  consentVersion,
  consentAcceptedAt,
} = {}) {
  if (consent === false) {
    throw createValidationError('Consent to personal data processing is required.');
  }

  const cleanName = sanitizeInput(fullName, 120).trim();
  const cleanPhone = sanitizeInput(phone, 25).trim();
  const cleanNotes = sanitizeInput(notes, 2000).trim();
  const cleanLang = sanitizeInput(lang || 'vi', 10).trim() || 'vi';

  if (cleanName.length < 1 || cleanName.length > 120) {
    throw createValidationError('Full name must be between 1 and 120 characters.');
  }
  if (!isValidPhone(cleanPhone)) {
    throw createValidationError('Invalid phone number.');
  }
  if (cleanNotes.length < 1 || cleanNotes.length > 2000) {
    throw createValidationError('Case notes must be between 1 and 2000 characters.');
  }

  const basePayload = {
    fullName: cleanName,
    phone: cleanPhone,
    notes: cleanNotes,
    status: 'new',
    source: 'web_contact_form',
    lang: cleanLang,
    createdAt: serverTimestamp(),
  };

  let payload = {
    ...basePayload,
    ...buildConsentAuditFields({ consentVersion, consentAcceptedAt }),
  };
  let usedSchemaFallback = false;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      return await withTimeout(addDoc(collection(db, COLLECTION_NAME), payload), SUBMIT_TIMEOUT_MS);
    } catch (err) {
      // shortcut: fallback to 10-field payload if remote firestore.rules isn't deployed yet; remove once deployed
      if (!usedSchemaFallback && err?.code === 'permission-denied') {
        usedSchemaFallback = true;
        payload = basePayload;
        continue;
      }
      if (attempt === 0 && isRetryable(err)) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
        continue;
      }
      throw err;
    }
  }
}

/**
 * Subscribe to real-time consultation inquiries ordered by newest first.
 */
export function subscribeConsultations(onData, onError, maxResults = 200) {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('createdAt', 'desc'),
      limit(maxResults)
    );
    return onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        onData?.(list);
      },
      (error) => {
        onError?.(error);
      }
    );
  } catch (err) {
    onError?.(err);
    return () => {};
  }
}

/**
 * Update a consultation document with audit metadata (updatedAt, updatedBy).
 */
export async function updateConsultation(id, patch, adminEmail) {
  if (typeof id !== 'string' || !id.trim()) {
    throw createValidationError('Consultation ID is required.');
  }
  if (!patch || typeof patch !== 'object') {
    throw createValidationError('Update patch must be an object.');
  }
  if (patch.status !== undefined && !CONSULTATION_STATUSES.includes(patch.status)) {
    throw createValidationError(`Invalid consultation status: ${patch.status}`);
  }

  // Keep createdAt and consent evidence immutable per firestore.rules
  const {
    createdAt: _ignoredCreatedAt,
    consentVersion: _ignoredConsentVersion,
    consentAcceptedAt: _ignoredConsentAcceptedAt,
    ...safePatch
  } = patch;
  return updateDoc(doc(db, COLLECTION_NAME, id), {
    ...safePatch,
    updatedAt: serverTimestamp(),
    updatedBy: typeof adminEmail === 'string' ? adminEmail.trim() : '',
  });
}

/**
 * Delete a consultation document by ID.
 */
export async function deleteConsultation(id) {
  if (typeof id !== 'string' || !id.trim()) {
    throw createValidationError('Consultation ID is required.');
  }
  return deleteDoc(doc(db, COLLECTION_NAME, id));
}

/**
 * Escape a single CSV cell per RFC 4180 and neutralize spreadsheet formula prefixes.
 */
export function escapeCsvField(value) {
  if (value === null || value === undefined) return '';
  let str = String(value);
  // Neutralize formula injection (=, +, -, @, tab, CR) in spreadsheet apps
  if (/^[=+\-@\t\r]/.test(str)) {
    str = `'${str}`;
  }
  if (/[",\r\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function formatTimestampForCsv(ts) {
  if (!ts) return '';
  if (typeof ts?.toDate === 'function') return ts.toDate().toISOString();
  if (ts instanceof Date) return ts.toISOString();
  return String(ts);
}

/**
 * Build a UTF-8 CSV string (without BOM) from consultation records.
 */
export function buildConsultationsCsv(inquiries = []) {
  const headers = [
    'ID',
    'Họ và tên',
    'Số điện thoại',
    'Trạng thái',
    'Nội dung vụ việc',
    'Ghi chú luật sư',
    'Ngôn ngữ',
    'Nguồn',
    'Thời gian gửi',
    'Cập nhật lần cuối',
    'Người cập nhật',
    'Phiên bản chấp thuận',
    'Thời điểm chấp thuận',
  ];

  const rows = inquiries.map((item = {}) => [
    item.id || '',
    item.fullName || '',
    item.phone || '',
    item.status || 'new',
    item.notes || '',
    item.lawyerNotes || '',
    item.lang || '',
    item.source || '',
    formatTimestampForCsv(item.createdAt),
    formatTimestampForCsv(item.updatedAt),
    item.updatedBy || '',
    item.consentVersion || '',
    formatTimestampForCsv(item.consentAcceptedAt),
  ]);

  return [headers, ...rows]
    .map((row) => row.map(escapeCsvField).join(','))
    .join('\r\n');
}

/**
 * Trigger a UTF-8 BOM CSV file download named ho-so-tu-van-YYYY-MM-DD.csv.
 */
export function exportConsultationsCsv(inquiries = []) {
  const csvContent = `\uFEFF${buildConsultationsCsv(inquiries)}`;
  if (typeof document === 'undefined' || typeof Blob === 'undefined') {
    return csvContent;
  }

  const today = new Date().toISOString().slice(0, 10);
  const filename = `ho-so-tu-van-${today}.csv`;
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  return csvContent;
}
