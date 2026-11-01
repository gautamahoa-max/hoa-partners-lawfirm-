import React, { useState, useMemo } from 'react';
import { calculateCourtFee, estimateLegalFee } from '../utils/courtFeeCalc';
import { formatCurrency, formatNumber } from '../utils/formatters';
import { useAnimatedNumber } from '../utils/useAnimatedNumber';
import { CalculatorIcon, ScaleIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

export default function LegalCalculator() {
  const [activeTab, setActiveTab] = useState('courtFee'); // 'courtFee' | 'legalFee'

  // State cho Án phí
  const [disputeValue, setDisputeValue] = useState(500000000); // 500 triệu
  const [caseType, setCaseType] = useState('commercial'); // 'commercial' | 'civil'

  // State cho Phí Luật sư
  const [selectedService, setSelectedService] = useState('litigation');

  // Tính toán kết quả
  const courtFeeResult = useMemo(() => {
    return calculateCourtFee(disputeValue, caseType);
  }, [disputeValue, caseType]);

  const legalFeeResult = useMemo(() => {
    return estimateLegalFee(selectedService, disputeValue);
  }, [selectedService, disputeValue]);

  // Hiệu ứng số nhảy mượt
  const animatedCourtFee = useAnimatedNumber(courtFeeResult.courtFee, 350);
  const animatedAdvanceFee = useAnimatedNumber(courtFeeResult.advanceFee, 350);
  const animatedLegalFee = useAnimatedNumber(legalFeeResult.baseFee, 350);

  // Xử lý gửi sự kiện Pre-fill phễu chuyển đổi
  const handleConsultThisCase = () => {
    const detailData = {
      serviceType: activeTab === 'courtFee' ? 'Tranh tụng / Khởi kiện' : legalFeeResult.name,
      disputeValue: `${formatCurrency(disputeValue)}`,
      courtFeeEst: `${formatCurrency(courtFeeResult.courtFee)}`,
      legalFeeEst: activeTab === 'courtFee' ? 'Theo thương lượng vụ việc' : `${formatCurrency(legalFeeResult.baseFee)}`,
      note: activeTab === 'courtFee'
        ? `Khách tính án phí: Loại tranh chấp ${caseType === 'commercial' ? 'Kinh doanh thương mại' : 'Dân sự / Đất đai'}, giá trị tranh chấp: ${formatCurrency(disputeValue)}, dự tính án phí: ${formatCurrency(courtFeeResult.courtFee)}.`
        : `Khách chọn gói dịch vụ: ${legalFeeResult.name}, dự toán chi phí cơ sở: ${formatCurrency(legalFeeResult.baseFee)}.`,
    };

    window.dispatchEvent(
      new CustomEvent('app-prefill-lead', {
        detail: detailData,
      })
    );

    const formElement = document.getElementById('lien-he');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="tinh-an-phi" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề & Giới thiệu */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <CalculatorIcon className="w-4 h-4 text-amber-700" />
            Công Cụ Tương Tác Trực Tuyến
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Tra Cứu Án Phí &amp; Dự Toán Chi Phí Pháp Lý
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Minh bạch chi phí tố tụng theo đúng <strong>Nghị quyết 326/2016/UBTVQH14</strong> của Ủy ban Thường vụ Quốc hội.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm mt-8">
            <button
              onClick={() => setActiveTab('courtFee')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'courtFee'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Tính Án Phí Tòa Án (NQ 326)
            </button>
            <button
              onClick={() => setActiveTab('legalFee')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'legalFee'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Dự Toán Phí Luật Sư Tư Vấn
            </button>
          </div>
        </div>

        {/* Khối tính toán chính */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          
          {activeTab === 'courtFee' ? (
            /* TAB 1: TÍNH ÁN PHÍ */
            <div className="space-y-8">
              
              {/* Chọn loại tranh chấp */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Lựa chọn loại quan hệ tranh chấp:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCaseType('commercial')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      caseType === 'commercial'
                        ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                        : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold text-sm">Tranh Chấp Kinh Doanh, Thương Mại</p>
                    <p className={`text-xs mt-1 ${caseType === 'commercial' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Hợp đồng kinh tế, cổ đông, mua bán hàng hóa, đầu tư
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCaseType('civil')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      caseType === 'civil'
                        ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                        : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold text-sm">Tranh Chấp Dân Sự, Đất Đai, Thừa Kế</p>
                    <p className={`text-xs mt-1 ${caseType === 'civil' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Bất động sản, chia thừa kế, hợp đồng vay tài sản cá nhân
                    </p>
                  </button>
                </div>
              </div>

              {/* Nhập & Thanh trượt Giá trị tranh chấp */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <label htmlFor="dispute-slider" className="text-sm font-bold text-slate-900">
                    Giá trị tài sản hoặc số tiền tranh chấp (VNĐ):
                  </label>
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif whitespace-nowrap flex-shrink-0">
                    {formatCurrency(disputeValue)}
                  </span>
                </div>

                {/* Slider */}
                <input
                  id="dispute-slider"
                  type="range"
                  min="10000000"
                  max="5000000000"
                  step="10000000"
                  value={disputeValue}
                  onChange={(e) => setDisputeValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />

                {/* Các nút bấm nhanh số tiền */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="text-xs text-slate-500 font-medium">Chọn nhanh:</span>
                  {[100000000, 300000000, 500000000, 1000000000, 2000000000].map((quickVal) => (
                    <button
                      key={quickVal}
                      type="button"
                      onClick={() => setDisputeValue(quickVal)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                        disputeValue === quickVal
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {formatNumber(quickVal / 1000000)} triệu
                    </button>
                  ))}
                </div>
              </div>

              {/* Bảng kết quả hiển thị chuẩn NQ 326 */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                  {/* Án phí sơ thẩm */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Mức Án Phí Sơ Thẩm Phải Nộp
                    </p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mt-2 whitespace-nowrap flex-shrink-0">
                      {formatCurrency(animatedCourtFee)}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Căn cứ: {courtFeeResult.formulaDescription}
                    </p>
                  </div>

                  {/* Tiền tạm ứng án phí (50%) */}
                  <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Tiền Tạm Ứng Án Phí (Khi nộp đơn khởi kiện)
                    </p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-serif mt-2 whitespace-nowrap flex-shrink-0">
                      {formatCurrency(animatedAdvanceFee)}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Bằng 50% án phí sơ thẩm theo Điều 7 NQ 326/2016
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-1">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Lưu ý từ Luật sư:</strong> Bên nào thắng kiện toàn bộ sẽ được Tòa án tuyên trả lại toàn bộ tiền tạm ứng án phí đã nộp; bên thua kiện sẽ phải chịu toàn bộ án phí theo bản án.
                  </span>
                </div>
              </div>

            </div>
          ) : (
            /* TAB 2: DỰ TOÁN PHÍ DỊCH VỤ LUẬT SƯ */
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Chọn gói dịch vụ pháp lý bạn cần:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'litigation', name: 'Đại diện Tranh tụng Tòa án / VIAC' },
                    { id: 'contract', name: 'Soạn thảo & Rà soát Hợp đồng' },
                    { id: 'retainer', name: 'Luật sư Pháp chế Thường xuyên Doanh nghiệp' },
                    { id: 'incorporation', name: 'Thành lập & Tái cấu trúc Doanh nghiệp' },
                  ].map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        selectedService === srv.id
                          ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                          : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <p className="font-bold text-sm">{srv.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bảng kết quả ước tính thù lao */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {legalFeeResult.name}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">
                        Mức Thù Lao Tham Khảo Cơ Sở
                      </h4>
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-serif whitespace-nowrap flex-shrink-0">
                      Từ {formatCurrency(animatedLegalFee)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    <strong>Phạm vi thực hiện:</strong> {legalFeeResult.notes}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    * Mức thù lao thực tế sẽ được Luật sư báo giá cố định sau khi trực tiếp nghiên cứu hồ sơ tài liệu của Quý khách, cam kết không phát sinh chi phí ẩn.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* Nút Chuyển Đổi Phễu (Event-Driven Pre-fill) */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-xs text-slate-500">
                Cần Luật sư tư vấn chiến lược và bảo vệ quyền lợi cho vụ việc này?
              </p>
              <p className="text-sm font-bold text-slate-800">
                Nhận tư vấn trực tiếp 1:1 cùng Luật sư trong 30 phút.
              </p>
            </div>

            <button
              onClick={handleConsultThisCase}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/15 transition-all whitespace-nowrap"
            >
              <span>Đặt Lịch Tư Vấn Phương Án Này</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
