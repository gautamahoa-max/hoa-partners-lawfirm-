import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import pdfWorkerUrl from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';
import consentPdf202602Url from '../assets/consent/HP-PDPL-02-2026.pdf';
import consentPdf202603Url from '../assets/consent/HP-PDPL-03-2026.pdf';
import { CONSENT_DOCUMENT_VERSION } from '../services/consultations.js';
import { exportClientConsentPdf, resolveConsentVersion } from './consentPdf.js';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

/**
 * Immutable registry of Consent Letter PDF versions bundled with the app.
 * Keep historical versions intact when bumping CONSENT_DOCUMENT_VERSION so old client records stay verifiable.
 */
export const CONSENT_VERSION_ARCHIVE = {
  'HP-PDPL-02/2026': {
    version: 'HP-PDPL-02/2026',
    effectiveDate: '02/2026',
    layout: 'split',
    title: 'Thư chấp thuận xử lý Dữ liệu cá nhân (Phiên bản 02/2026)',
    pdfUrl: consentPdf202602Url,
  },
  'HP-PDPL-03/2026': {
    version: 'HP-PDPL-03/2026',
    effectiveDate: '11/2026',
    layout: 'interleaved',
    title: 'Thư chấp thuận xử lý Dữ liệu cá nhân — Song ngữ Việt – Anh (Phiên bản 03/2026)',
    pdfUrl: consentPdf202603Url,
  },
};

export { pdfjsLib };

export function getConsentArchiveEntry(version = CONSENT_DOCUMENT_VERSION) {
  return resolveConsentVersion(CONSENT_VERSION_ARCHIVE, version, CONSENT_DOCUMENT_VERSION);
}

export async function downloadClientConsentPdf(inquiry) {
  const archiveEntry = getConsentArchiveEntry(inquiry?.consentVersion);
  return exportClientConsentPdf({ inquiry, archiveEntry, pdfjsLib });
}
