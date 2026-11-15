import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import pdfWorkerUrl from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';
import consentPdfUrl from '../assets/thu-chap-thuan-xu-ly-du-lieu-ca-nhan.pdf';
import { formatConsentDateLabels } from '../utils/formatters';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const PAGE_DATE_PLACEHOLDERS = {
  1: 'Đắk Lắk, năm 2026',
  6: 'Dak Lak, 2026',
};

function PdfPageCanvas({ pdfDoc, pageNumber, zoom, baseWidth, watermarkLabel, dateLabel }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return undefined;
    let cancelled = false;
    let renderTask = null;

    (async () => {
      try {
        const page = await pdfDoc.getPage(pageNumber);
        if (cancelled) return;

        const unscaledViewport = page.getViewport({ scale: 1 });
        const targetCssWidth = Math.max(260, baseWidth) * zoom;
        const scale = targetCssWidth / unscaledViewport.width;
        const viewport = page.getViewport({ scale });
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;
        const context = canvas.getContext('2d', { alpha: false });

        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        renderTask = page.render({
          canvasContext: context,
          viewport,
          transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined,
        });

        await renderTask.promise;
        if (cancelled) return;

        const targetText = PAGE_DATE_PLACEHOLDERS[pageNumber];
        if (targetText && dateLabel) {
          const textContent = await page.getTextContent();
          if (cancelled) return;
          const dateItem = textContent.items.find((item) => item.str?.trim() === targetText);
          if (dateItem) {
            const [a, b, , , vx, vy] = pdfjsLib.Util.transform(viewport.transform, dateItem.transform);
            const fontPx = Math.hypot(a, b);
            const origWidthPx = dateItem.width * scale;
            const centerX = vx + origWidthPx / 2;
            const clearWidth = origWidthPx + fontPx * 0.9;

            context.save();
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            context.fillStyle = '#ffffff';
            context.fillRect(
              centerX - clearWidth / 2,
              vy - fontPx * 1.05,
              clearWidth,
              fontPx * 1.4
            );
            context.font = `italic ${fontPx}px "Times New Roman", "Liberation Serif", Times, serif`;
            context.fillStyle = '#000000';
            context.textAlign = 'center';
            context.textBaseline = 'alphabetic';
            context.fillText(dateLabel, centerX, vy);
            context.restore();
          }
        }
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException' && !cancelled) {
          console.error(`Lỗi kết xuất trang PDF ${pageNumber}:`, err);
        }
      }
    })();

    return () => {
      cancelled = true;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, pageNumber, zoom, baseWidth, dateLabel]);

  return (
    <div
      className="relative mx-auto bg-white shadow-[0_6px_28px_rgba(15,23,42,0.22)] border border-slate-200 overflow-hidden select-none"
      style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* pointer-events-none ngăn lưu ảnh / kéo thả trực tiếp từ canvas trên cả desktop và mobile */}
      <canvas ref={canvasRef} className="block pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="-rotate-[30deg] text-slate-900/[0.045] font-bold tracking-[0.22em] text-xl sm:text-3xl uppercase whitespace-nowrap">
          {watermarkLabel}
        </span>
      </div>
    </div>
  );
}

/**
 * View-only PDF modal rendered strictly onto protected canvases (no download/print toolbar).
 */
export default function PdfConsentModal({ lang, formT, consentAcceptedAt, onClose, onAgree }) {
  const scrollRef = useRef(null);
  const pageRefs = useRef({});
  const hasAutoJumpedRef = useRef(false);
  const dateLabels = useMemo(() => formatConsentDateLabels(consentAcceptedAt), [consentAcceptedAt]);

  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [baseWidth, setBaseWidth] = useState(720);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    const updateWidth = () => {
      if (!scrollRef.current) return;
      const available = scrollRef.current.clientWidth - 32;
      setBaseWidth(Math.min(Math.max(available, 280), 760));
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'c', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [onClose]);

  useEffect(() => {
    let active = true;
    let loadedDoc = null;
    const abortController = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setLoadError('');
        const response = await fetch(consentPdfUrl, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const buffer = await response.arrayBuffer();
        if (!active) return;

        const loadingTask = pdfjsLib.getDocument({ data: buffer });
        loadedDoc = await loadingTask.promise;
        if (!active) {
          await loadedDoc.destroy();
          return;
        }
        setPdfDoc(loadedDoc);
        setNumPages(loadedDoc.numPages);
      } catch (err) {
        if (err?.name !== 'AbortError' && active) {
          console.error('Không thể tải file PDF Thư chấp thuận:', err);
          setLoadError(
            lang === 'en'
              ? 'Unable to display the PDF document at the moment. Please try again.'
              : 'Không thể hiển thị văn bản PDF lúc này. Quý khách vui lòng thử lại.'
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
      abortController.abort();
      if (loadedDoc) {
        loadedDoc.destroy().catch(() => {});
      }
    };
  }, [lang]);

  useEffect(() => {
    if (!pdfDoc || numPages < 6 || hasAutoJumpedRef.current) return;
    hasAutoJumpedRef.current = true;
    if (lang === 'en') {
      requestAnimationFrame(() => {
        pageRefs.current[6]?.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    }
  }, [pdfDoc, numPages, lang]);

  const jumpToPage = (pageNum) => {
    pageRefs.current[pageNum]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 select-none print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-consent-modal-title"
      onClick={onClose}
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div
        className="bg-slate-100 border border-slate-300 rounded-2xl max-w-4xl w-full h-[92vh] flex flex-col shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Viewer Toolbar (No Download / No Print) */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-slate-200 bg-white flex flex-wrap items-center justify-between gap-2.5 shrink-0">
          <div className="min-w-0">
            <h2
              id="pdf-consent-modal-title"
              className="text-sm sm:text-base font-bold text-[#0F2144] tracking-tight truncate"
            >
              {formT.privacyModalTitle}
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              {formT.privacyModalSubtitle} {numPages > 0 ? `(${numPages} ${lang === 'en' ? 'pages' : 'trang'})` : ''}
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {numPages >= 6 && (
              <div className="hidden md:flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => jumpToPage(1)}
                  className="px-2 py-1 rounded-md text-[#0F2144] hover:bg-white transition-colors cursor-pointer"
                >
                  VN (1–5)
                </button>
                <button
                  type="button"
                  onClick={() => jumpToPage(6)}
                  className="px-2 py-1 rounded-md text-[#0F2144] hover:bg-white transition-colors cursor-pointer"
                >
                  {`EN (6–${numPages})`}
                </button>
              </div>
            )}

            <div className="flex items-center rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.75, Number((z - 0.15).toFixed(2))))}
                aria-label="Thu nhỏ"
                className="px-2.5 py-1 hover:bg-slate-50 cursor-pointer"
              >
                −
              </button>
              <span className="px-1.5 text-[11px] tabular-nums min-w-[3.1rem] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(1.6, Number((z + 0.15).toFixed(2))))}
                aria-label="Phóng to"
                className="px-2.5 py-1 hover:bg-slate-50 cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={formT.privacyModalClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-xl leading-none cursor-pointer transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        {/* Scrollable PDF Pages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-auto p-3 sm:p-6 space-y-4 sm:space-y-5 bg-slate-200/70"
        >
          {loading && (
            <div className="h-full min-h-[240px] flex flex-col items-center justify-center gap-2 text-xs sm:text-sm text-slate-600">
              <div className="w-6 h-6 border-2 border-[#0F2144] border-t-transparent rounded-full animate-spin" />
              <span>{lang === 'en' ? 'Loading PDF document...' : 'Đang tải tài liệu PDF...'}</span>
            </div>
          )}

          {loadError && !loading && (
            <div className="max-w-md mx-auto my-12 p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 text-center">
              {loadError}
            </div>
          )}

          {!loading &&
            !loadError &&
            pdfDoc &&
            Array.from({ length: numPages }, (_, idx) => {
              const pageNumber = idx + 1;
              return (
                <div
                  key={pageNumber}
                  ref={(el) => {
                    pageRefs.current[pageNumber] = el;
                  }}
                  className="space-y-1.5"
                >
                  <PdfPageCanvas
                    pdfDoc={pdfDoc}
                    pageNumber={pageNumber}
                    zoom={zoom}
                    baseWidth={baseWidth}
                    watermarkLabel={formT.privacyWatermark}
                    dateLabel={pageNumber === 1 ? dateLabels.vi : pageNumber === 6 ? dateLabels.en : ''}
                  />
                  <p className="text-center text-[11px] text-slate-500 font-medium">
                    {lang === 'en' ? `Page ${pageNumber} / ${numPages}` : `Trang ${pageNumber} / ${numPages}`}
                  </p>
                </div>
              );
            })}
        </div>

        {/* Sticky Footer */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-slate-200 bg-white flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2.5 shrink-0">
          <span className="text-[11px] text-slate-500 text-center sm:text-left">
            {formT.privacyFooterHint}
          </span>
          <div className="flex flex-col-reverse sm:flex-row gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {formT.privacyModalClose}
            </button>
            <button
              type="button"
              onClick={onAgree}
              className="px-5 py-2 rounded-lg bg-[#0F2144] text-white text-xs sm:text-sm font-semibold hover:bg-[#162A56] transition-colors cursor-pointer"
            >
              {formT.privacyModalAgreeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
