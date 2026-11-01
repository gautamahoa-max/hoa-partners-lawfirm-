import React, { useState } from 'react';
import { CloseIcon, ShieldCheckIcon } from './Icons';

export default function LegalRiskCheckerModal({ isOpen, onClose, onFinishAssessment }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'corp',
      title: 'Quản trị doanh nghiệp và Điều lệ',
      question: 'Doanh nghiệp của bạn đã rà soát và cập nhật Điều lệ công ty theo Luật Doanh nghiệp 2020 mới nhất chưa?',
      options: [
        { label: 'Đã chuẩn hóa bởi luật sư và tuân thủ Luật Doanh nghiệp 2020', score: 0 },
        { label: 'Sử dụng mẫu có sẵn từ khi đăng ký kinh doanh, chưa từng sửa đổi', score: 2 },
        { label: 'Chưa có hoặc không nắm rõ nội dung Điều lệ công ty', score: 3 },
      ],
    },
    {
      id: 'contract',
      title: 'Hợp đồng kinh tế và Đối tác',
      question: 'Các hợp đồng kinh tế lớn của bạn có điều khoản phạt vi phạm, giới hạn bồi thường và cơ quan tài phán (Tòa án/VIAC) rõ ràng không?',
      options: [
        { label: 'Toàn bộ hợp đồng đều có luật sư thẩm định chặt chẽ trước khi ký', score: 0 },
        { label: 'Thường sử dụng mẫu đối tác đưa hoặc mẫu tham khảo trên mạng', score: 3 },
        { label: 'Chỉ thỏa thuận qua trao đổi điện tử, chưa ký kết hợp đồng chính thức', score: 4 },
      ],
    },
    {
      id: 'ip',
      title: 'Sở hữu trí tuệ và Nhãn hiệu',
      question: 'Tên thương hiệu, nhãn hiệu và sản phẩm cốt lõi đã được cấp văn bằng bảo hộ tại Cục Sở hữu Trí tuệ chưa?',
      options: [
        { label: 'Đã được cấp Giấy chứng nhận đăng ký nhãn hiệu độc quyền', score: 0 },
        { label: 'Đã nộp đơn nhưng chưa có kết quả hoặc chưa theo dõi thẩm định', score: 1 },
        { label: 'Chưa thực hiện thủ tục đăng ký bảo hộ nhãn hiệu', score: 3 },
      ],
    },
    {
      id: 'labor',
      title: 'Lao động và Bảo mật thông tin',
      question: 'Nhân sự cấp quản lý và kỹ thuật chủ chốt có ký Thỏa thuận bảo mật thông tin (NDA) và Nội quy lao động có đăng ký không?',
      options: [
        { label: 'Đầy đủ thỏa thuận bảo mật và Nội quy lao động đã đăng ký cơ quan chức năng', score: 0 },
        { label: 'Chỉ ký hợp đồng lao động cơ bản, chưa có điều khoản ràng buộc bảo mật', score: 2 },
        { label: 'Không ký kết bất kỳ thỏa thuận ràng buộc trách nhiệm nào', score: 3 },
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
      setCurrentStep(questions.length);
    }
  };

  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr.score, 0);

  let riskLevel = {
    title: 'Mức độ rủi ro thấp (An toàn)',
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    desc: 'Hệ thống pháp lý doanh nghiệp của bạn đang được thiết lập tương đối bài bản. Tuy nhiên, nên duy trì việc rà soát định kỳ hàng năm theo các luật mới ban hành.',
  };

  if (totalScore >= 7) {
    riskLevel = {
      title: 'Mức độ rủi ro cao (Cần khắc phục ngay)',
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      desc: 'Doanh nghiệp đang đối mặt với nhiều nguy cơ tranh chấp lớn: rủi ro tranh chấp nhãn hiệu, bị phạt vi phạm hợp đồng hoặc thất thoát dữ liệu bí mật kinh doanh.',
    };
  } else if (totalScore >= 3) {
    riskLevel = {
      title: 'Mức độ rủi ro trung bình',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: 'Tồn tại một số điểm hở trong hợp đồng hoặc quan hệ lao động có thể chuyển hóa thành tranh chấp nếu phát sinh bất đồng với đối tác.',
    };
  }

  const handleConsultFromAssessment = () => {
    onClose();
    if (onFinishAssessment) {
      onFinishAssessment(riskLevel.title, totalScore);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Đóng"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {currentStep < questions.length ? (
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                <span>Khảo sát sức khỏe pháp lý</span>
                <span>Câu {currentStep + 1} / {questions.length}</span>
              </div>
              
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-4">
                <div
                  className="bg-slate-900 h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              <span className="text-xs font-semibold text-slate-500 block mb-1">
                {questions[currentStep].title}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                {questions[currentStep].question}
              </h3>
            </div>

            <div className="space-y-2.5">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(questions[currentStep].id, opt.score, opt.label)}
                  className="w-full p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-[#F8F9FA] text-left text-xs sm:text-sm font-medium text-slate-800 transition-all flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold border ${riskLevel.badge}`}>
                  {riskLevel.title}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-serif mt-1">
                  Đánh giá rủi ro sơ bộ
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {riskLevel.desc}
            </p>

            <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200 text-xs space-y-1.5 text-slate-700">
              <p className="font-bold text-slate-900">Khuyến nghị từ Luật sư:</p>
              <p className="text-slate-600">
                Phòng ngừa rủi ro pháp lý luôn hiệu quả hơn việc giải quyết hậu quả tại Tòa án. Việc hoàn thiện hệ thống hợp đồng mẫu và quy chế nội bộ giúp doanh nghiệp giữ thế chủ động hoàn toàn khi phát sinh bất đồng.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Đóng lại
              </button>
              <button
                type="button"
                onClick={handleConsultFromAssessment}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] transition-all"
              >
                Nhận tư vấn khắc phục rủi ro
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
