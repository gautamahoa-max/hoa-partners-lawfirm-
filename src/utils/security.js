/**
 * Security utilities for Hoa & Associates Law Firm SPA
 * Follows OWASP & Auth0 SPA security best practices:
 * - Never store sensitive PII or tokens in localStorage
 * - Strict input sanitization & length bounds
 * - Anti-automation rate limiting & honeypot verification
 */

const RATE_LIMIT_KEY = 'hp_rate_limit_ts';
const RATE_LIMIT_COUNT_KEY = 'hp_rate_limit_count';
const COOLDOWN_MS = 60 * 1000; // 60 seconds between submissions
const MAX_SESSION_SUBMISSIONS = 5;

/**
 * Purge any legacy plaintext PII stored in localStorage
 */
export function purgeLegacySensitiveStorage() {
  try {
    if (localStorage.getItem('hp_consultations')) {
      localStorage.removeItem('hp_consultations');
    }
  } catch {
    // Ignore storage access errors in restricted/incognito contexts
  }
}

/**
 * Strip HTML tags, control characters, and peligrous protocols from user input
 */
export function sanitizeInput(value, maxLength = 2000) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '') // control chars
    .replace(/<[^>]*>?/gm, '') // strip HTML tags
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .slice(0, maxLength);
}

/**
 * Validate Vietnamese & international phone numbers
 */
export function isValidPhone(phone) {
  if (typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s.()-]/g, '');
  // Vietnamese phone format (03, 05, 07, 08, 09 or +84) or international 9-15 digits
  return /^(\+?84|0)[35789]\d{8}$/.test(cleaned) || /^\+?\d{9,15}$/.test(cleaned);
}

/**
 * Check if form submission is allowed under session rate limiting
 */
export function checkRateLimit() {
  try {
    const lastTs = Number(sessionStorage.getItem(RATE_LIMIT_KEY) || '0');
    const count = Number(sessionStorage.getItem(RATE_LIMIT_COUNT_KEY) || '0');
    const now = Date.now();

    if (count >= MAX_SESSION_SUBMISSIONS) {
      return {
        allowed: false,
        reason: 'max_reached',
        waitSeconds: 0,
      };
    }

    if (lastTs && now - lastTs < COOLDOWN_MS) {
      const waitSeconds = Math.ceil((COOLDOWN_MS - (now - lastTs)) / 1000);
      return {
        allowed: false,
        reason: 'cooldown',
        waitSeconds,
      };
    }

    return { allowed: true, reason: null, waitSeconds: 0 };
  } catch {
    return { allowed: true, reason: null, waitSeconds: 0 };
  }
}

/**
 * Record a non-sensitive timestamp in sessionStorage for rate-limiting
 */
export function recordSubmissionTimestamp() {
  try {
    const count = Number(sessionStorage.getItem(RATE_LIMIT_COUNT_KEY) || '0');
    sessionStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
    sessionStorage.setItem(RATE_LIMIT_COUNT_KEY, String(count + 1));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Safely scroll to an element ID without using arbitrary CSS selector strings
 */
export function safeScrollToAnchor(href) {
  if (typeof href !== 'string') return;
  const cleanId = href.replace(/^#\/?/, '').replace(/[^a-zA-Z0-9_-]/g, '');
  if (!cleanId) return;
  const target = document.getElementById(cleanId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
