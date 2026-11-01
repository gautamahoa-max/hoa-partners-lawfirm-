import React, { useEffect } from 'react';
import { CloseIcon, CheckCircleIcon, ScaleIcon, ArrowRightIcon } from './Icons';

export default function DetailModal({ service, onClose, onSelectServiceForConsult }) {
  // Đóng modal khi nhấn phím Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const IconComponent = service.icon || ScaleIcon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 text-left overflow-hidden">
        
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Đóng cửa sổ"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Header Modal */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-md">
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md">
              {service.stat}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-serif mt-1">
              {service.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Căn cứ pháp lý: <strong>{service.details?.basis}</strong>
            </p>
          </div>
        </div>

        {/* Nội dung chi tiết */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          
          {/* Phạm vi công việc */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <span>Phạm vi hỗ trợ chuyên sâu</span>
            </h4>
            <div className="space-y-2">
              {service.details?.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quy trình giải quyết */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Quy trình triển khai 4 bước
            </h4>
            <div className="space-y-2">
              {service.details?.steps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Sản phẩm bàn giao */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900">
            <strong>Kết quả &amp; Sản phẩm bàn giao:</strong> {service.details?.deliverables}
          </div>

        </div>

        {/* Footer & CTA */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Đóng cửa sổ
          </button>
          
          <button
            onClick={() => {
              onClose();
              onSelectServiceForConsult(service);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] active:scale-[0.99] shadow-md shadow-slate-900/15 flex items-center justify-center gap-2 transition-all duration-150"
          >
            <span>Đặt Lịch Tư Vấn Lĩnh Vực Này</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
