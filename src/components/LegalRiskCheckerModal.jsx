import React, { useState } from 'react';
import { CloseIcon, ShieldCheckIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

export default function LegalRiskCheckerModal({ isOpen, onClose, onFinishAssessment }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'corp',
      title: 'Quản Trị Doanh Nghiệp & Điều Lệ',
      question: 'Doanh nghiệp của bạn đã rà soát và cập nhật Điều lệ công ty theo Luật Doanh nghiệp 2020 mới nhất chưa?',
      options: [
        { label: 'Đã cập nhật chuẩn hóa bởi luật sư', score: 0 },
        { label: 'Dùng mẫu có sẵn từ khi thành lập, chưa từng sửa đổi', score: 2 },
        { label: 'Chưa có hoặc không rõ nội dung Điều lệ', score: 3 },
      ],
    },
    {
      id: 'contract',
      title: 'Hợp Đồng Kinh Tế & Đối Tác',
      question: 'Các hợp đồng kinh tế lớn của bạn có điều khoản phạt vi phạm, giới hạn bồi thường và cơ quan tài phán (Tòa án/VIAC) rõ ràng không?',
      options: [
        { label: 'Toàn bộ hợp đồng đều có luật sư rà soát chặt chẽ', score: 0 },
        { label: 'Thường tải mẫu trên mạng hoặc ký theo mẫu của đối tác đưa', score: 3 },
        { label: 'Chỉ thỏa thuận qua email/tin nhắn, chưa ký hợp đồng chính thức', score: 4 },
      ],
    },
    {
      id: 'ip',
      title: 'Sở Hữu Trí Tuệ & Thương Hiệu',
      question: 'Tên thương hiệu, logo và sản phẩm cốt lõi đã được cấp Giấy chứng nhận đăng ký nhãn hiệu tại Cục Sở hữu Trí tuệ chưa?',
      options: [
        { label: 'Đã được cấp văn bằng bảo hộ độc quyền', score: 0 },
        { label: 'Đã nộp đơn nhưng chưa có kết quả / Chưa rõ tình trạng', score: 1 },
        { label: 'Chưa đăng ký bảo hộ, vẫn đang kinh doanh tự do', score: 3 },
      ],
    },
    {
      id: 'labor',
      title: 'Lao Động & Bí Mật Kinh Doanh',
      question: 'Nhân sự cấp quản lý và kỹ thuật chủ chốt có ký Thỏa thuận bảo mật thông tin (NDA) và Chống cạnh tranh (NCA) không?',
      options: [
        { label: 'Đầy đủ thỏa thuận NDA/NCA và nội quy lao động đăng ký Sở LĐ-TB&XH', score: 0 },
        { label: 'Chỉ có hợp đồng lao động cơ bản, không có điều khoản bảo mật', score: 2 },
        { label: 'Không ký kết bất kỳ thỏa thuận ràng buộc nào', score: 3 },
      ],
    },
  ];

  if (!isOpen) return null;

  const handleSelectOption = (questionId, score, label) => {
    const updatedAnswers = { ...answers, [questionId]: { score, label } };
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Hoàn thành khảo sát
      setCurrentStep(questions.length);
    }
  };

  // Tính tổng điểm rủi ro
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr.score, 0);

  let riskLevel = {
    title: 'Mức Độ Rủi Ro Thấp (An Toàn)',
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    color: 'text-emerald-700',
    desc: 'Hệ thống pháp lý doanh nghiệp của bạn đang được vận hành khá tốt. Tuy nhiên nên duy trì việc rà soát định kỳ hàng năm.',
  };

  if (totalScore >= 7) {
    riskLevel = {
      title: 'BÁO ĐỘNG ĐỎ: Rủi Ro Pháp Lý Nghiêm Trọng',
      badge: 'bg-rose-100 text-rose-800 border-rose-300',
      color: 'text-rose-700',
      desc: 'Doanh nghiệp đang đối mặt với nhiều nguy cơ tranh chấp lớn: nguy cơ mất trắng thương hiệu, bị phạt vi phạm hợp đồng hoặc mất bí mật kinh doanh.',
    };
  } else if (totalScore >= 3) {
    riskLevel = {
      title: 'Rủi Ro Trung Bình: Cần Khắc Phục Sớm',
      badge: 'bg-amber-100 text-amber-800 border-amber-300',
      color: 'text-amber-700',
      desc: 'Có các lỗ hổng tiềm ẩn trong hợp đồng hoặc quan hệ lao động có thể biến thành tranh chấp tố tụng tốn kém tiền bạc.',
    };
  }

  const handleConsultFromAssessment = () => {
    onClose();
    if (onFinishAssessment) {
      onFinishAssessment(riskLevel.title, totalScore);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 text-left">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Đóng"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {currentStep < questions.length ? (
          <div>
            {/* Header câu hỏi */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                <span>Khảo sát sức khỏe pháp lý</span>
                <span>Câu {currentStep + 1} / {questions.length}</span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                <div
                  className="bg-slate-900 h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                {questions[currentStep].title}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mt-2">
                {questions[currentStep].question}
              </h3>
            </div>

            {/* Danh sách lựa chọn */}
            <div className="space-y-3">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(questions[currentStep].id, opt.score, opt.label)}
                  className="w-full p-4 rounded-2xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 text-left text-sm font-medium text-slate-800 transition-all flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* MÀN HÌNH KẾT QUẢ ĐÁNH GIÁ */
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-900 text-amber-400 mx-auto flex items-center justify-center shadow-lg">
              <ShieldCheckIcon className="w-8 h-8" />
            </div>

            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${riskLevel.badge}`}>
                {riskLevel.title}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-serif mt-3">
                Báo Cáo Sức Khỏe Pháp Lý Của Bạn
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {riskLevel.desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <p className="font-bold text-slate-900">Khuyến nghị từ Luật sư Võ Văn Hoà:</p>
              <p className="text-slate-600">
                Phòng bệnh hơn chữa bệnh. Chi phí xử lý một vụ kiện tại Tòa án hoặc Trọng tài thường tốn kém gấp 10 lần so với việc rà soát hoàn thiện hợp đồng ngay từ đầu.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Đóng lại
              </button>
              <button
                type="button"
                onClick={handleConsultFromAssessment}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Nhận Tư Vấn Khắc Phục Lỗ Hổng</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
