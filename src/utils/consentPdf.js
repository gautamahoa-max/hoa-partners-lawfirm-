import { formatConsentDateLabels, formatConsentNumberLines } from './formatters.js';

export const PAGE_DATE_PLACEHOLDERS = {
  1: 'Đắk Lắk, năm 2026',
  6: 'Dak Lak, 2026',
};

/**
 * Build the per-page dynamic text overlays (document number & NĐ 30 date) for a given PDF archive version.
 */
export function buildConsentPageOverlays({
  pageNumber,
  archiveEntry,
  dateLabels,
  consentNumber,
  isoTimestamp,
} = {}) {
  const layout =
    archiveEntry?.layout ||
    (archiveEntry?.version === 'HP-PDPL-02/2026' ? 'split' : 'interleaved');
  const cleanNumber = typeof consentNumber === 'string' ? consentNumber.trim() : '';
  const numberLines = formatConsentNumberLines(cleanNumber, isoTimestamp);
  const overlays = [];

  if (layout === 'interleaved') {
    if (pageNumber === 1) {
      overlays.push({
        placeholder: 'Số: 00/2026/TCT-HCS',
        text: numberLines.vi,
        fontStyle: 'normal',
      });
      overlays.push({
        placeholder: 'Ref. No.: 00/2026/TCT-HCS',
        text: numberLines.en,
        fontStyle: 'italic',
      });
      if (dateLabels?.vi) {
        overlays.push({
          placeholder: 'Đắk Lắk, năm 2026',
          text: dateLabels.vi,
          fontStyle: 'italic',
        });
      }
      if (dateLabels?.en) {
        overlays.push({
          placeholder: 'Dak Lak, 2026',
          text: dateLabels.en,
          fontStyle: 'italic',
        });
      }
    }
    return overlays;
  }

  // Legacy split bilingual version (HP-PDPL-02/2026): Page 1 = VN, Page 6 = EN
  if (pageNumber === 1) {
    if (cleanNumber) {
      overlays.push({
        placeholder: 'Số: 02/2026/TCT-HCS',
        text: numberLines.vi,
        fontStyle: 'normal',
      });
    }
    if (dateLabels?.vi) {
      overlays.push({
        placeholder: 'Đắk Lắk, năm 2026',
        text: dateLabels.vi,
        fontStyle: 'italic',
      });
    }
  } else if (pageNumber === 6) {
    if (cleanNumber) {
      overlays.push({
        placeholder: 'Ref. No. 02/2026/TCT-HCS',
        text: numberLines.legacyEn,
        fontStyle: 'italic',
      });
    }
    if (dateLabels?.en) {
      overlays.push({
        placeholder: 'Dak Lak, 2026',
        text: dateLabels.en,
        fontStyle: 'italic',
      });
    }
  }
  return overlays;
}

const A4_WIDTH_PT = 595.28;
const COVER_WIDTH_PX = 1240;
const COVER_HEIGHT_PX = 1754;

/**
 * Resolve the immutable consent archive entry matching a stored version code.
 */
export function resolveConsentVersion(registry = {}, requestedVersion, defaultVersion) {
  const cleanRequested = typeof requestedVersion === 'string' ? requestedVersion.trim() : '';
  if (cleanRequested && Object.prototype.hasOwnProperty.call(registry, cleanRequested)) {
    return { ...registry[cleanRequested], isExactVersionMatch: true };
  }
  if (defaultVersion && Object.prototype.hasOwnProperty.call(registry, defaultVersion)) {
    return { ...registry[defaultVersion], isExactVersionMatch: false };
  }
  const firstKey = Object.keys(registry)[0];
  return firstKey ? { ...registry[firstKey], isExactVersionMatch: false } : null;
}

/**
 * Render a PDF.js page onto a canvas and overlay dynamic document number & NĐ 30 date lines.
 */
export async function renderConsentPdfPage({
  page,
  canvas,
  scale,
  dpr = 1,
  dateLabel = '',
  overlays = null,
  pdfjsLib,
  isCancelled = () => false,
  onTaskCreated,
}) {
  const viewport = page.getViewport({ scale });
  const context = canvas.getContext('2d', { alpha: false });
  if (!context) {
    throw new Error('Canvas 2D context is unavailable.');
  }

  canvas.width = Math.floor(viewport.width * dpr);
  canvas.height = Math.floor(viewport.height * dpr);
  canvas.style.width = `${Math.floor(viewport.width)}px`;
  canvas.style.height = `${Math.floor(viewport.height)}px`;

  const renderTask = page.render({
    canvasContext: context,
    viewport,
    transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined,
  });
  onTaskCreated?.(renderTask);

  await renderTask.promise;
  if (isCancelled()) return;

  const fallbackTarget = PAGE_DATE_PLACEHOLDERS[page.pageNumber];
  const resolvedOverlays = Array.isArray(overlays)
    ? overlays
    : fallbackTarget && dateLabel
      ? [{ placeholder: fallbackTarget, text: dateLabel, fontStyle: 'italic' }]
      : [];

  const activeOverlays = resolvedOverlays.filter((o) => o?.placeholder && o?.text);
  if (activeOverlays.length > 0) {
    const textContent = await page.getTextContent();
    if (isCancelled()) return;

    for (const overlay of activeOverlays) {
      const targetItem = textContent.items.find((item) => item.str?.trim() === overlay.placeholder);
      if (!targetItem) continue;

      const [a, b, , , vx, vy] = pdfjsLib.Util.transform(viewport.transform, targetItem.transform);
      const fontPx = Math.hypot(a, b);
      const origWidthPx = targetItem.width * scale;
      const centerX = vx + origWidthPx / 2;
      const stylePrefix = overlay.fontStyle === 'italic' ? 'italic ' : '';

      context.save();
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.font = `${stylePrefix}${fontPx}px "Times New Roman", "Liberation Serif", Times, serif`;
      const measuredWidth = context.measureText(overlay.text).width;
      const clearWidth = Math.max(origWidthPx, measuredWidth) + fontPx * 0.6;

      context.fillStyle = '#ffffff';
      context.fillRect(
        centerX - clearWidth / 2,
        vy - fontPx * 0.92,
        clearWidth,
        fontPx * 1.24
      );
      context.fillStyle = '#000000';
      context.textAlign = 'center';
      context.textBaseline = 'alphabetic';
      context.fillText(overlay.text, centerX, vy);
      context.restore();
    }
  }
}

function toValidDate(ts) {
  if (!ts) return null;
  if (typeof ts?.toDate === 'function') return ts.toDate();
  if (typeof ts?.seconds === 'number') return new Date(ts.seconds * 1000);
  const d = new Date(ts);
  return Number.isNaN(d.getTime()) ? null : d;
}

function formatGmt7DateTime(ts) {
  const date = toValidDate(ts);
  if (!date) return 'Không ghi nhận';
  const formatted = new Intl.DateTimeFormat('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);
  return `${formatted} (GMT+7)`;
}

function toIsoStringSafe(ts) {
  const date = toValidDate(ts);
  return date ? date.toISOString() : '';
}

function wrapTextLines(ctx, text, maxWidth) {
  const normalized = String(text || '').replace(/\r\n/g, '\n');
  const rawParagraphs = normalized.split('\n');
  const lines = [];

  for (const para of rawParagraphs) {
    const words = para.split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      lines.push('');
      continue;
    }

    let current = '';
    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (ctx.measureText(candidate).width <= maxWidth) {
        current = candidate;
      } else if (!current) {
        // Break single oversized token/URL safely across lines
        let chunk = '';
        for (const ch of word) {
          if (ctx.measureText(chunk + ch).width > maxWidth && chunk) {
            lines.push(chunk);
            chunk = ch;
          } else {
            chunk += ch;
          }
        }
        current = chunk;
      } else {
        lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);
  }
  return lines;
}

/**
 * Draw an electronic consent audit certificate page for an individual client inquiry.
 */
export function drawConfirmationCoverCanvas(canvas, inquiry = {}, archiveEntry = {}) {
  canvas.width = COVER_WIDTH_PX;
  canvas.height = COVER_HEIGHT_PX;
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) {
    throw new Error('Canvas 2D context is unavailable.');
  }

  const marginX = 92;
  const usableWidth = COVER_WIDTH_PX - marginX * 2;
  const sans = '"Inter", "Segoe UI", Arial, sans-serif';
  const serif = '"Times New Roman", "Liberation Serif", Georgia, serif';

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, COVER_WIDTH_PX, COVER_HEIGHT_PX);

  // Subtle top navy header band
  ctx.fillStyle = '#0F2144';
  ctx.fillRect(0, 0, COVER_WIDTH_PX, 26);

  // Firm title & certificate heading
  ctx.fillStyle = '#0F2144';
  ctx.textAlign = 'center';
  ctx.font = `bold 24px ${sans}`;
  ctx.fillText('CÔNG TY LUẬT TNHH HOÀ VÀ CỘNG SỰ', COVER_WIDTH_PX / 2, 92);

  ctx.fillStyle = '#475569';
  ctx.font = `600 18px ${sans}`;
  ctx.fillText('HOA & ASSOCIATES LAW FIRM LLC • ĐẮK LẮK — TP. HỒ CHÍ MINH', COVER_WIDTH_PX / 2, 124);

  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(marginX, 152);
  ctx.lineTo(COVER_WIDTH_PX - marginX, 152);
  ctx.stroke();

  ctx.fillStyle = '#0F2144';
  ctx.font = `bold 34px ${serif}`;
  ctx.fillText('PHIẾU XÁC NHẬN CHẤP THUẬN ĐIỆN TỬ', COVER_WIDTH_PX / 2, 212);

  ctx.fillStyle = '#334155';
  ctx.font = `italic 21px ${serif}`;
  ctx.fillText(
    '(Bằng chứng xác nhận đồng ý theo Khoản 3 Điều 9 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15)',
    COVER_WIDTH_PX / 2,
    248
  );

  // Consent metadata table
  const acceptedIso = toIsoStringSafe(inquiry.consentAcceptedAt);
  const dateLabels = formatConsentDateLabels(acceptedIso || toIsoStringSafe(inquiry.createdAt));
  const versionCode = inquiry.consentVersion || archiveEntry.version || '';

  const rows = [
    ['Mã hồ sơ (Firestore ID)', inquiry.id || 'Không xác định'],
    ['Số Thư chấp thuận', inquiry.consentNumber || 'Chưa cấp số'],
    ['Chủ thể dữ liệu / Khách hàng', inquiry.fullName || 'Không xác định'],
    ['Số điện thoại liên hệ', inquiry.phone || 'Không xác định'],
    [
      'Phiên bản Thư chấp thuận',
      `${versionCode}${archiveEntry.effectiveDate ? ` (Hiệu lực ${archiveEntry.effectiveDate})` : ''}`,
    ],
    [
      'Thời điểm xác nhận đồng ý',
      `${formatGmt7DateTime(inquiry.consentAcceptedAt)}${acceptedIso ? ` | ISO: ${acceptedIso}` : ''}`,
    ],
    ['Thời điểm tiếp nhận hồ sơ', formatGmt7DateTime(inquiry.createdAt)],
    ['Ngày hiển thị trên văn bản', `${dateLabels.vi} / ${dateLabels.en}`],
    [
      'Ngôn ngữ & Nguồn gửi',
      `${(inquiry.lang || 'vi').toUpperCase()} — ${inquiry.source || 'web_contact_form'}`,
    ],
  ];

  const tableTop = 286;
  const labelColWidth = 340;
  const valueMaxWidth = usableWidth - labelColWidth - 36;

  const measuredRows = rows.map(([label, value]) => {
    ctx.font = `19px ${sans}`;
    const valueLines = wrapTextLines(ctx, value, valueMaxWidth);
    const lines = valueLines.length > 0 ? valueLines : [''];
    const height = Math.max(52, lines.length * 26 + 24);
    return { label, lines, height };
  });
  const tableHeight = measuredRows.reduce((sum, r) => sum + r.height, 0);

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(marginX, tableTop, usableWidth, tableHeight);
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(marginX, tableTop, usableWidth, tableHeight);

  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  let rowY = tableTop;
  measuredRows.forEach((row, idx) => {
    const y = rowY;
    rowY += row.height;
    if (idx > 0) {
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(marginX, y);
      ctx.lineTo(marginX + usableWidth, y);
      ctx.stroke();
    }
    ctx.strokeStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.moveTo(marginX + labelColWidth, y);
    ctx.lineTo(marginX + labelColWidth, y + row.height);
    ctx.stroke();

    ctx.fillStyle = '#0F2144';
    ctx.font = `bold 19px ${sans}`;
    ctx.fillText(row.label, marginX + 18, y + row.height / 2);

    ctx.fillStyle = '#0f172a';
    ctx.font = `19px ${sans}`;
    const textStartY = y + (row.height - (row.lines.length - 1) * 26) / 2;
    row.lines.forEach((line, lineIdx) => {
      ctx.fillText(line, marginX + labelColWidth + 18, textStartY + lineIdx * 26);
    });
  });

  // Case notes section
  const notesHeadingY = tableTop + tableHeight + 44;
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#0F2144';
  ctx.font = `bold 21px ${sans}`;
  ctx.fillText('Nội dung yêu cầu tư vấn khách hàng đã gửi kèm xác nhận:', marginX, notesHeadingY);

  const notesBoxTop = notesHeadingY + 16;
  const notesBoxHeight = Math.max(280, COVER_HEIGHT_PX - 230 - notesBoxTop);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(marginX, notesBoxTop, usableWidth, notesBoxHeight);
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(marginX, notesBoxTop, usableWidth, notesBoxHeight);

  ctx.fillStyle = '#1e293b';
  ctx.font = `20px ${sans}`;
  const notesLines = wrapTextLines(ctx, inquiry.notes || '(Không có nội dung)', usableWidth - 44);
  const lineHeight = 30;
  const maxVisibleLines = Math.floor((notesBoxHeight - 36) / lineHeight);
  const clippedLines = notesLines.slice(0, maxVisibleLines);
  if (notesLines.length > maxVisibleLines && clippedLines.length > 0) {
    clippedLines[clippedLines.length - 1] = `${clippedLines[clippedLines.length - 1].slice(0, -3)}...`;
  }
  clippedLines.forEach((line, idx) => {
    ctx.fillText(line, marginX + 22, notesBoxTop + 40 + idx * lineHeight);
  });

  // Attachment & export audit footer
  const footerTop = notesBoxTop + notesBoxHeight + 44;
  ctx.fillStyle = '#334155';
  ctx.font = `italic 19px ${serif}`;
  const numberNote = inquiry.consentNumber ? `, Số ${inquiry.consentNumber}` : '';
  const noteText =
    `Đính kèm ngay sau trang này là toàn văn Thư chấp thuận phiên bản ${versionCode}${numberNote} ` +
    '(song ngữ Việt – Anh, giữ nguyên thể thức theo Nghị định 30/2020/NĐ-CP) hiển thị đúng số và ngày khách hàng xác nhận.';
  wrapTextLines(ctx, noteText, usableWidth).forEach((line, idx) => {
    ctx.fillText(line, marginX, footerTop + idx * 28);
  });

  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(marginX, COVER_HEIGHT_PX - 92);
  ctx.lineTo(COVER_WIDTH_PX - marginX, COVER_HEIGHT_PX - 92);
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = `17px ${sans}`;
  ctx.fillText(
    `Xuất từ Cổng Quản Trị Hoà & Cộng sự lúc ${formatGmt7DateTime(new Date().toISOString())}`,
    marginX,
    COVER_HEIGHT_PX - 54
  );
}

/**
 * Package rendered JPEG pages into a standards-compliant multi-page A4 PDF (v1.4) with zero extra deps.
 */
export function buildPdfFromJpegPages(pages = []) {
  if (!Array.isArray(pages) || pages.length === 0) {
    throw new Error('At least one rendered JPEG page is required to build a PDF.');
  }

  const encoder = new TextEncoder();
  const chunks = [];
  let byteOffset = 0;

  const pushBytes = (uint8) => {
    chunks.push(uint8);
    byteOffset += uint8.byteLength;
  };
  const pushText = (str) => pushBytes(encoder.encode(str));

  pushText('%PDF-1.4\n');
  pushBytes(new Uint8Array([0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a]));

  const offsets = [0]; // index 0 reserved for PDF free object 0
  const kidRefs = pages.map((_, idx) => `${3 + idx * 3} 0 R`).join(' ');

  const startObj = (objNum, headerBody) => {
    offsets[objNum] = byteOffset;
    pushText(`${objNum} 0 obj\n${headerBody}\nendobj\n`);
  };

  startObj(1, '<< /Type /Catalog /Pages 2 0 R >>');
  startObj(2, `<< /Type /Pages /Kids [ ${kidRefs} ] /Count ${pages.length} >>`);

  pages.forEach((page, idx) => {
    if (!(page?.bytes instanceof Uint8Array) || page.bytes.byteLength === 0) {
      throw new Error(`Invalid JPEG bytes on PDF page ${idx + 1}.`);
    }
    const widthPx = Number(page.widthPx);
    const heightPx = Number(page.heightPx);
    if (!Number.isFinite(widthPx) || widthPx <= 0 || !Number.isFinite(heightPx) || heightPx <= 0) {
      throw new Error(`Invalid dimensions on PDF page ${idx + 1}.`);
    }

    const pageObj = 3 + idx * 3;
    const contentObj = pageObj + 1;
    const imgObj = pageObj + 2;

    const widthPt = A4_WIDTH_PT.toFixed(2);
    const heightPt = ((A4_WIDTH_PT * heightPx) / widthPx).toFixed(2);
    const drawStream = `q\n${widthPt} 0 0 ${heightPt} 0 0 cm\n/Im0 Do\nQ\n`;
    const drawBytes = encoder.encode(drawStream);

    startObj(
      pageObj,
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${widthPt} ${heightPt}] /Resources << /XObject << /Im0 ${imgObj} 0 R >> >> /Contents ${contentObj} 0 R >>`
    );

    offsets[contentObj] = byteOffset;
    pushText(`${contentObj} 0 obj\n<< /Length ${drawBytes.byteLength} >>\nstream\n`);
    pushBytes(drawBytes);
    pushText('endstream\nendobj\n');

    offsets[imgObj] = byteOffset;
    pushText(
      `${imgObj} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${Math.round(widthPx)} /Height ${Math.round(heightPx)} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.bytes.byteLength} >>\nstream\n`
    );
    pushBytes(page.bytes);
    pushText('\nendstream\nendobj\n');
  });

  const xrefOffset = byteOffset;
  const totalObjects = offsets.length;
  pushText(`xref\n0 ${totalObjects}\n`);
  pushText('0000000000 65535 f \n');
  for (let objNum = 1; objNum < totalObjects; objNum += 1) {
    pushText(`${String(offsets[objNum]).padStart(10, '0')} 00000 n \n`);
  }
  pushText(`trailer\n<< /Size ${totalObjects} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

  const output = new Uint8Array(byteOffset);
  let cursor = 0;
  for (const chunk of chunks) {
    output.set(chunk, cursor);
    cursor += chunk.byteLength;
  }
  return output;
}

async function canvasToJpegBytes(canvas, quality = 0.88) {
  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (result) => (result ? resolve(result) : reject(new Error('Không thể xuất trang PDF từ canvas.'))),
      'image/jpeg',
      quality
    );
  });
  return new Uint8Array(await blob.arrayBuffer());
}

function toSafeFilenameSlug(value) {
  const ascii = String(value || 'khach-hang')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return ascii || 'khach-hang';
}

/**
 * Generate and download a complete per-client PDF containing the electronic consent certificate
 * followed by the frozen archived consent document with the client's exact consent date.
 */
export async function exportClientConsentPdf({ inquiry, archiveEntry, pdfjsLib }) {
  if (!inquiry) {
    throw new Error('Missing inquiry record for PDF export.');
  }
  if (!archiveEntry?.pdfUrl) {
    throw new Error('Missing archived PDF template URL.');
  }

  const response = await fetch(archiveEntry.pdfUrl);
  if (!response.ok) {
    throw new Error(`Không thể tải bản lưu trữ Thư chấp thuận (HTTP ${response.status}).`);
  }
  const buffer = await response.arrayBuffer();
  const pdfDoc = await pdfjsLib.getDocument({ data: buffer }).promise;

  try {
    const pages = [];
    const coverCanvas = document.createElement('canvas');
    drawConfirmationCoverCanvas(coverCanvas, inquiry, archiveEntry);
    pages.push({
      bytes: await canvasToJpegBytes(coverCanvas, 0.9),
      widthPx: coverCanvas.width,
      heightPx: coverCanvas.height,
    });

    const acceptedIso = toIsoStringSafe(inquiry.consentAcceptedAt) || toIsoStringSafe(inquiry.createdAt);
    const dateLabels = formatConsentDateLabels(acceptedIso);
    const pageCanvas = document.createElement('canvas');

    for (let pageNumber = 1; pageNumber <= pdfDoc.numPages; pageNumber += 1) {
      const page = await pdfDoc.getPage(pageNumber);
      const unscaled = page.getViewport({ scale: 1 });
      const scale = COVER_WIDTH_PX / unscaled.width;
      const overlays = buildConsentPageOverlays({
        pageNumber,
        archiveEntry,
        dateLabels,
        consentNumber: inquiry.consentNumber,
        isoTimestamp: acceptedIso,
      });

      await renderConsentPdfPage({
        page,
        canvas: pageCanvas,
        scale,
        dpr: 1,
        overlays,
        pdfjsLib,
      });

      pages.push({
        bytes: await canvasToJpegBytes(pageCanvas, 0.86),
        widthPx: pageCanvas.width,
        heightPx: pageCanvas.height,
      });
    }

    const pdfBytes = buildPdfFromJpegPages(pages);
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const numSlug = inquiry.consentNumber ? toSafeFilenameSlug(inquiry.consentNumber) : '';
    const slug = toSafeFilenameSlug(inquiry.fullName);
    const docId = toSafeFilenameSlug(inquiry.id || 'hoso');
    const filename = numSlug
      ? `thu-chap-thuan-${numSlug}-${slug}-${docId}.pdf`
      : `thu-chap-thuan-${slug}-${docId}.pdf`;

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return filename;
  } finally {
    await pdfDoc.destroy().catch(() => {});
  }
}
