import React, { useState, useEffect } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CheckCircleIcon, ArrowRightIcon, ShieldCheckIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Tranh tụng Tòa án & Trọng tài',
    disputeValue: '',
    note: '',
  });

  const [prefilledBadge, setPrefilledBadge] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lắng nghe sự kiện toàn cục 'app-prefill-lead'
  useEffect(() => {
    const handlePrefill = (e) => {
      if (!e.detail) return;
      const { serviceType, disputeValue, courtFeeEst, note } = e.detail;

      setFormData((prev) => ({
        ...prev,
        service: serviceType || prev.service,
        disputeValue: disputeValue || prev.disputeValue,
        note: note ? `${note}\n\nYêu cầu hỗ trợ thêm: ` : prev.note,
      }));

      setPrefilledBadge(`Đã nhận dữ liệu: ${serviceType || 'Vụ việc'} (${disputeValue || ''})`);
    };

    window.addEventListener('app-prefill-lead', handlePrefill);
    return () => window.removeEventListener('app-prefill-lead', handlePrefill);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="lien-he" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Cột Trái: Thông tin liên hệ & Văn phòng Hãng Luật */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                Đặt Lịch Hẹn &amp; Tiếp Nhận Hồ Sơ
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif leading-tight">
                Liên Hệ Trực Tiếp Với Đội Ngũ Luật Sư
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Chúng tôi tiếp nhận hồ sơ trực tiếp tại văn phòng, tư vấn qua điện thoại bảo mật hoặc gặp gỡ tại trụ sở doanh nghiệp của bạn.
              </p>
            </div>

            {/* Các kênh liên hệ trực tiếp */}
            <div className="space-y-4">
              <a
                href="tel:0912345678"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Hotline Khẩn Cấp (24/7)</p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-amber-700">0912.345.678</p>
                </div>
              </a>

              <a
                href="mailto:contact@hoapartners.vn"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Hòm Thư Tiếp Nhận Tài Liệu</p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-amber-700">contact@hoapartners.vn</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Hệ Thống Văn Phòng</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Trụ sở Hà Nội:</p>
                  <p className="text-xs text-slate-600">Tòa tháp Diamond Flower, P. Nhân Chính, Q. Thanh Xuân, TP. Hà Nội</p>
                  <p className="text-sm font-bold text-slate-900 mt-2">Văn phòng TP. Hồ Chí Minh:</p>
                  <p className="text-xs text-slate-600">Tòa nhà Landmark 81, P. 22, Q. Bình Thạnh, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs font-medium">
                <ClockIcon className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span>
                  Thời gian làm việc: Thứ 2 - Thứ 7 (8h00 - 18h00). Đối với các vụ việc khẩn cấp (tạm giữ, áp dụng biện pháp khẩn cấp tạm thời), đường dây nóng hoạt động 24/7.
                </span>
              </div>
            </div>
          </div>

          {/* Cột Phải: Form Đăng Ký Tư Vấn */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/60 text-left">
              
              {/* Badge thông báo nhận thông tin từ bộ tính */}
              {prefilledBadge && (
                <div className="mb-6 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {prefilledBadge}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPrefilledBadge(null)}
                    className="text-emerald-700 hover:text-emerald-900 underline text-[11px]"
                  >
                    Bỏ qua
                  </button>
                </div>
              )}

              {isSubmitted ? (
                /* Màn hình gửi thành công trang trọng */
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircleIcon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">
                    Tiếp Nhận Thông Tin Thành Công!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Cảm ơn Quý khách <strong>{formData.fullName || 'bạn'}</strong>. Luật sư chuyên trách của <strong>HÒA &amp; CỘNG SỰ</strong> sẽ liên hệ trực tiếp qua số điện thoại <strong>{formData.phone}</strong> trong vòng <strong>30 phút làm việc</strong> để bảo mật trao đổi về vụ việc.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          service: 'Tranh tụng Tòa án & Trọng tài',
                          disputeValue: '',
                          note: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      Gửi thêm yêu cầu vụ việc khác
                    </button>
                  </div>
                </div>
              ) : (
                /* Form nhập liệu chuẩn tiếng Việt */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-900 font-serif">
                      Phiếu Yêu Cầu Tư Vấn Pháp Lý
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Mọi thông tin Quý khách cung cấp đều được bảo vệ nghiêm ngặt theo quy tắc đạo đức hành nghề luật sư.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Họ và tên */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Họ và tên của bạn <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        onInvalid={(e) => e.target.setCustomValidity('Vui lòng nhập họ và tên của bạn.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        placeholder="Ví dụ: Nguyễn Văn An"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                      />
                    </div>

                    {/* Số điện thoại */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Số điện thoại liên hệ <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onInvalid={(e) => e.target.setCustomValidity('Vui lòng nhập số điện thoại để Luật sư liên hệ.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        placeholder="Ví dụ: 0912 345 678"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email nhận tài liệu
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@doanhnghiep.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                      />
                    </div>

                    {/* Lĩnh vực dịch vụ */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Lĩnh vực quan tâm
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                      >
                        <option value="Tranh tụng Tòa án & Trọng tài">Tranh tụng Tòa án &amp; Trọng tài (VIAC)</option>
                        <option value="Pháp chế Doanh nghiệp & Quản trị">Pháp chế Doanh nghiệp &amp; Quản trị</option>
                        <option value="Soạn thảo & Đàm phán Hợp đồng">Soạn thảo &amp; Đàm phán Hợp đồng</option>
                        <option value="Mua bán & Sáp nhập (M&A)">Mua bán &amp; Sáp nhập (M&amp;A)</option>
                        <option value="Bất động sản & Dự án Đầu tư">Bất động sản &amp; Dự án Đầu tư</option>
                        <option value="Sở hữu Trí tuệ & Chuyển giao CN">Sở hữu Trí tuệ &amp; Bản quyền</option>
                        <option value="Tư vấn Pháp luật khác">Lĩnh vực pháp lý khác</option>
                      </select>
                    </div>
                  </div>

                  {/* Giá trị tranh chấp / vụ việc nếu có */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Giá trị hợp đồng / tranh chấp ước tính (nếu có)
                    </label>
                    <input
                      type="text"
                      value={formData.disputeValue}
                      onChange={(e) => setFormData({ ...formData, disputeValue: e.target.value })}
                      placeholder="Ví dụ: 500.000.000 đ hoặc 2 tỷ VNĐ"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                    />
                  </div>

                  {/* Tóm tắt vụ việc */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tóm tắt nội dung vụ việc &amp; Yêu cầu cần giải quyết
                    </label>
                    <textarea
                      rows={4}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="Quý khách vui lòng mô tả ngắn gọn tình huống (hợp đồng có tranh chấp, quyền sử dụng đất, nội quy lao động...)"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Cam kết bảo mật 100% dữ liệu theo Quy tắc Đạo đức và Ứng xử nghề nghiệp Luật sư.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-base font-bold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] active:scale-[0.99] shadow-xl shadow-slate-900/15 hover:shadow-slate-900/25 transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    <span>Gửi Yêu Cầu Cho Luật Sư Phụ Trách</span>
                    <ArrowRightIcon className="w-4 h-4" />
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
