import React, { useState, useEffect } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CheckCircleIcon, ShieldCheckIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Tranh tụng Tòa án và Trọng tài',
    disputeValue: '',
    note: '',
  });

  const [prefilledBadge, setPrefilledBadge] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handlePrefill = (e) => {
      if (!e.detail) return;
      const { serviceType, disputeValue, note } = e.detail;

      setFormData((prev) => ({
        ...prev,
        service: serviceType || prev.service,
        disputeValue: disputeValue || prev.disputeValue,
        note: note ? `${note}\n\nYêu cầu hỗ trợ thêm: ` : prev.note,
      }));

      setPrefilledBadge(`Đã tiếp nhận thông tin từ bảng tính: ${serviceType || 'Vụ việc'} (${disputeValue || ''})`);
    };

    window.addEventListener('app-prefill-lead', handlePrefill);
    return () => window.removeEventListener('app-prefill-lead', handlePrefill);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="lien-he" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột Trái: Trụ sở văn phòng & Đường dây nóng */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">
                Thông tin liên hệ
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-serif">
                Tiếp nhận hồ sơ và Tư vấn
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Quý khách có thể gửi tài liệu sơ bộ qua biểu mẫu hoặc liên hệ trực tiếp với luật sư theo các kênh dưới đây.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200">
                <p className="text-xs text-slate-500 font-medium">Đường dây nóng khẩn cấp 24/7</p>
                <a href="tel:0912345678" className="text-lg font-bold text-slate-900 hover:text-amber-800 transition-colors block mt-0.5">
                  0912.345.678
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200">
                <p className="text-xs text-slate-500 font-medium">Hòm thư tiếp nhận tài liệu vụ việc</p>
                <a href="mailto:contact@hoapartners.vn" className="text-sm font-semibold text-slate-900 hover:text-amber-800 transition-colors block mt-0.5">
                  contact@hoapartners.vn
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200 text-xs text-slate-700 space-y-2">
                <div>
                  <p className="font-bold text-slate-900">Trụ sở Hà Nội:</p>
                  <p className="text-slate-600 mt-0.5">Tòa tháp Diamond Flower, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội</p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <p className="font-bold text-slate-900">Văn phòng TP. Hồ Chí Minh:</p>
                  <p className="text-slate-600 mt-0.5">Tòa nhà Landmark 81, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ClockIcon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Giờ làm việc: Thứ Hai đến Thứ Bảy (08:00 - 18:00). Các vụ việc tạm giữ hoặc áp dụng biện pháp khẩn cấp được hỗ trợ 24/7.</span>
              </div>
            </div>
          </div>

          {/* Cột Phải: Biểu mẫu tiếp nhận vụ việc */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-10 border border-slate-200 text-left">
              
              {prefilledBadge && (
                <div className="mb-6 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {prefilledBadge}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPrefilledBadge(null)}
                    className="text-emerald-700 underline text-xs"
                  >
                    Bỏ qua
                  </button>
                </div>
              )}

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    Đã ghi nhận yêu cầu tư vấn
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Luật sư chuyên trách của Hòa &amp; Cộng sự sẽ liên hệ lại qua số điện thoại <strong>{formData.phone}</strong> trong vòng 30 phút làm việc để trực tiếp trao đổi về hồ sơ.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        service: 'Tranh tụng Tòa án và Trọng tài',
                        disputeValue: '',
                        note: '',
                      });
                    }}
                    className="mt-4 px-5 py-2 rounded text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Gửi yêu cầu vụ việc khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-bold text-slate-900 font-serif">
                      Phiếu yêu cầu tư vấn pháp lý
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Mọi thông tin được bảo mật theo quy định tại Điều 25 Luật Luật sư 2006.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Họ và tên <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        onInvalid={(e) => e.target.setCustomValidity('Vui lòng nhập họ và tên của bạn.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        placeholder="Nguyễn Văn An"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-slate-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Số điện thoại liên hệ <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onInvalid={(e) => e.target.setCustomValidity('Vui lòng nhập số điện thoại để luật sư liên hệ.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        placeholder="0912 345 678"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Địa chỉ thư điện tử (email)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="an.nguyen@doanhnghiep.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-slate-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Lĩnh vực quan tâm
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-slate-900 transition-colors"
                      >
                        <option value="Tranh tụng Tòa án và Trọng tài">Tranh tụng Tòa án và Trọng tài VIAC</option>
                        <option value="Pháp chế Doanh nghiệp và Quản trị">Pháp chế Doanh nghiệp và Quản trị</option>
                        <option value="Soạn thảo và Đàm phán Hợp đồng">Soạn thảo và Đàm phán Hợp đồng</option>
                        <option value="Mua bán và Sáp nhập (M&A)">Mua bán và Sáp nhập (M&amp;A)</option>
                        <option value="Bất động sản và Dự án Đầu tư">Bất động sản và Dự án Đầu tư</option>
                        <option value="Sở hữu Trí tuệ và Bản quyền">Sở hữu Trí tuệ và Bản quyền</option>
                        <option value="Lĩnh vực pháp luật khác">Lĩnh vực pháp luật khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Giá trị tranh chấp hoặc hợp đồng dự kiến (nếu có)
                    </label>
                    <input
                      type="text"
                      value={formData.disputeValue}
                      onChange={(e) => setFormData({ ...formData, disputeValue: e.target.value })}
                      placeholder="Ví dụ: 500.000.000 đ hoặc 2 tỷ VNĐ"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tóm tắt nội dung vụ việc và tài liệu hiện có
                    </label>
                    <textarea
                      rows={4}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="Mô tả tóm tắt diễn biến vụ việc hoặc các vướng mắc pháp lý cần tham vấn..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <ShieldCheckIcon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span>Cam kết bảo mật toàn diện thông tin thân chủ theo Luật Luật sư.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] transition-all"
                  >
                    Gửi yêu cầu tới luật sư phụ trách
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
