import React, { useEffect } from 'react';
import { CloseIcon, CheckCircleIcon, ScaleIcon } from './Icons';

export default function DetailModal({ service, onClose, onSelectServiceForConsult }) {
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 text-left overflow-hidden">
        
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Đóng"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Header Modal */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs text-slate-400 font-semibold block mb-0.5">
              Mã hồ sơ: {service.code || 'PL-01'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
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
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Phạm vi hỗ trợ tố tụng và tư vấn
            </h4>
            <div className="space-y-2">
              {service.details?.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircleIcon className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quy trình giải quyết */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Trình tự thực hiện hồ sơ
            </h4>
            <div className="space-y-2">
              {service.details?.steps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#F8F9FA] border border-slate-200 text-xs sm:text-sm text-slate-700">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Sản phẩm bàn giao */}
          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200 text-xs sm:text-sm text-slate-800">
            <strong>Kết quả bàn giao:</strong> {service.details?.deliverables}
          </div>

        </div>

        {/* Footer & CTA */}
        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Đóng cửa sổ
          </button>
          
          <button
            onClick={() => {
              onClose();
              onSelectServiceForConsult(service);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] transition-all"
          >
            Đặt lịch tư vấn vụ việc này
          </button>
        </div>

      </div>
    </div>
  );
}
