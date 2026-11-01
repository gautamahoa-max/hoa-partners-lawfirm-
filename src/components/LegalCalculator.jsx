import React, { useState, useMemo } from 'react';
import { calculateCourtFee, estimateLegalFee } from '../utils/courtFeeCalc';
import { formatCurrency, formatNumber } from '../utils/formatters';
import { useAnimatedNumber } from '../utils/useAnimatedNumber';
import { CalculatorIcon, CheckCircleIcon } from './Icons';

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
      serviceType: activeTab === 'courtFee' ? 'Tranh tụng và khởi kiện' : legalFeeResult.name,
      disputeValue: `${formatCurrency(disputeValue)}`,
      courtFeeEst: `${formatCurrency(courtFeeResult.courtFee)}`,
      legalFeeEst: activeTab === 'courtFee' ? 'Theo thỏa thuận vụ việc' : `${formatCurrency(legalFeeResult.baseFee)}`,
      note: activeTab === 'courtFee'
        ? `Khách tra cứu án phí: Loại tranh chấp ${caseType === 'commercial' ? 'Kinh doanh thương mại' : 'Dân sự và đất đai'}, giá trị tranh chấp: ${formatCurrency(disputeValue)}, dự tính án phí sơ thẩm: ${formatCurrency(courtFeeResult.courtFee)}.`
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
    <section id="tinh-an-phi" className="py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề & Giới thiệu chuẩn phong cách công báo */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-semibold text-slate-500 mb-2">
            Công cụ pháp lý trực tuyến
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Tra cứu án phí và dự toán chi phí tố tụng
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Áp dụng mức thu án phí sơ thẩm đối với vụ án có giá ngạch theo đúng <strong>Nghị quyết số 326/2016/UBTVQH14</strong> của Ủy ban Thường vụ Quốc hội.
          </p>

          {/* Tab Switcher tinh giản */}
          <div className="inline-flex p-1 bg-white border border-slate-300 rounded-lg shadow-sm mt-6">
            <button
              onClick={() => setActiveTab('courtFee')}
              className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                activeTab === 'courtFee'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Án phí Tòa án (Nghị quyết 326)
            </button>
            <button
              onClick={() => setActiveTab('legalFee')}
              className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                activeTab === 'legalFee'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thù lao Luật sư tư vấn
            </button>
          </div>
        </div>

        {/* Khối tính toán chính */}
        <div className="max-w-4xl bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 text-left">
          
          {activeTab === 'courtFee' ? (
            /* TAB 1: TÍNH ÁN PHÍ */
            <div className="space-y-8">
              
              {/* Chọn loại tranh chấp */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Quan hệ tranh chấp:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCaseType('commercial')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      caseType === 'commercial'
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold text-sm">Tranh chấp kinh doanh, thương mại</p>
                    <p className={`text-xs mt-1 ${caseType === 'commercial' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Hợp đồng kinh tế, tranh chấp thành viên công ty, mua bán hàng hóa
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCaseType('civil')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      caseType === 'civil'
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold text-sm">Tranh chấp dân sự, đất đai, thừa kế</p>
                    <p className={`text-xs mt-1 ${caseType === 'civil' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Quyền sử dụng đất, chia di sản thừa kế, hợp đồng vay tài sản
                    </p>
                  </button>
                </div>
              </div>

              {/* Nhập & Thanh trượt Giá trị tranh chấp */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <label htmlFor="dispute-slider" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Giá trị tài sản hoặc số tiền tranh chấp (VNĐ):
                  </label>
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 font-mono whitespace-nowrap flex-shrink-0">
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />

                {/* Các nút bấm nhanh số tiền */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="text-xs text-slate-500">Mốc nhanh:</span>
                  {[100000000, 300000000, 500000000, 1000000000, 2000000000].map((quickVal) => (
                    <button
                      key={quickVal}
                      type="button"
                      onClick={() => setDisputeValue(quickVal)}
                      className={`text-xs px-3 py-1 rounded border font-medium transition-colors ${
                        disputeValue === quickVal
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {formatNumber(quickVal / 1000000)} triệu
                    </button>
                  ))}
                </div>
              </div>

              {/* Bảng kết quả hiển thị chuẩn NQ 326 */}
              <div className="bg-[#F8F9FA] rounded-xl p-6 border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                  {/* Án phí sơ thẩm */}
                  <div className="bg-white p-5 rounded-lg border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Án phí sơ thẩm dự tính
                    </p>
                    <p className="text-2xl font-bold text-slate-900 font-mono mt-2 whitespace-nowrap flex-shrink-0">
                      {formatCurrency(animatedCourtFee)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {courtFeeResult.formulaDescription}
                    </p>
                  </div>

                  {/* Tiền tạm ứng án phí (50%) */}
                  <div className="bg-white p-5 rounded-lg border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Tạm ứng án phí (nộp khi khởi kiện)
                    </p>
                    <p className="text-2xl font-bold text-slate-900 font-mono mt-2 whitespace-nowrap flex-shrink-0">
                      {formatCurrency(animatedAdvanceFee)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Bằng 50% mức án phí sơ thẩm theo Điều 7 Nghị quyết 326
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-500 pt-1">
                  <CheckCircleIcon className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Bên thắng kiện toàn bộ sẽ được Tòa án tuyên trả lại số tiền tạm ứng án phí đã nộp; bên thua kiện có nghĩa vụ nộp toàn bộ án phí theo quyết định của bản án có hiệu lực.
                  </span>
                </div>
              </div>

            </div>
          ) : (
            /* TAB 2: DỰ TOÁN THÙ LAO LUẬT SƯ */
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Dịch vụ cần tham khảo:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'litigation', name: 'Đại diện tranh tụng Tòa án và Trọng tài VIAC' },
                    { id: 'contract', name: 'Soạn thảo và rà soát hợp đồng kinh tế' },
                    { id: 'retainer', name: 'Cố vấn pháp chế thường xuyên doanh nghiệp' },
                    { id: 'incorporation', name: 'Thành lập và tái cấu trúc doanh nghiệp' },
                  ].map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedService === srv.id
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <p className="font-bold text-sm">{srv.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-xl p-6 border border-slate-200">
                <div className="bg-white p-5 rounded-lg border border-slate-200 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs text-slate-500">
                        {legalFeeResult.name}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">
                        Thù lao cơ sở tham khảo
                      </h4>
                    </div>
                    <span className="text-2xl font-bold text-slate-900 font-mono whitespace-nowrap flex-shrink-0">
                      Từ {formatCurrency(animatedLegalFee)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    <strong>Phạm vi:</strong> {legalFeeResult.notes}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Thù lao chính thức sẽ được thỏa thuận trên cơ sở độ phức tạp của hồ sơ, thời gian thực hiện và được ghi rõ trong Hợp đồng dịch vụ pháp lý.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* Chuyển sang form tiếp nhận vụ việc */}
          <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500">
                Cần luật sư phân tích chứng cứ và chiến lược cho vụ việc này?
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Đặt lịch tư vấn trực tiếp với Luật sư Võ Văn Hoà.
              </p>
            </div>

            <button
              onClick={handleConsultThisCase}
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] transition-all whitespace-nowrap"
            >
              Tiếp tục với phương án này
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
