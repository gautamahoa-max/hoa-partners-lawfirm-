import React, { useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';
import { auth, googleProvider, db, isAuthorizedAdmin } from '../services/firebase';
import { PhoneIcon, CheckCircleIcon } from './Icons';

export default function AdminPage({ onBack }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [inquiries, setInquiries] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Lắng nghe trạng thái đăng nhập
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);
      if (user && !isAuthorizedAdmin(user)) {
        setAuthError(`Tài khoản ${user.email} không có quyền truy cập vào cổng quản trị của Luật sư.`);
      } else {
        setAuthError('');
      }
    });

    return () => unsubscribe();
  }, []);

  // Lắng nghe dữ liệu yêu cầu tư vấn khi đã đăng nhập đúng quyền
  useEffect(() => {
    if (!currentUser || !isAuthorizedAdmin(currentUser)) {
      setInquiries([]);
      return;
    }

    setIsDataLoading(true);
    try {
      const q = query(collection(db, 'consultations'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const list = snapshot.docs.map((d) => ({
            id: d.id,
            ...d.data(),
          }));
          setInquiries(list);
          setIsDataLoading(false);
        },
        (error) => {
          console.error('Lỗi tải dữ liệu Firestore:', error);
          setIsDataLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error('Lỗi kết nối Firestore:', err);
      setIsDataLoading(false);
    }
  }, [currentUser]);

  const handleGoogleLogin = async () => {
    try {
      setAuthError('');
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error('Lỗi đăng nhập Google:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setAuthError('Cửa sổ đăng nhập đã bị đóng trước khi hoàn tất.');
      } else if (err.code === 'auth/unauthorized-domain') {
        setAuthError('Tên miền trang web chưa được thêm vào mục Authorized domains trên Firebase Console.');
      } else {
        setAuthError(err.message || 'Đăng nhập không thành công. Vui lòng thử lại.');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setAuthError('');
    } catch (err) {
      console.error('Lỗi đăng xuất:', err);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const ref = doc(db, 'consultations', id);
      await updateDoc(ref, { status: newStatus });
    } catch (err) {
      console.error('Lỗi cập nhật trạng thái:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa yêu cầu tư vấn này khỏi hệ thống?')) return;
    try {
      await deleteDoc(doc(db, 'consultations', id));
    } catch (err) {
      console.error('Lỗi xóa yêu cầu:', err);
    }
  };

  const filteredInquiries = inquiries.filter((item) => {
    const matchesSearch =
      (item.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.phone || '').includes(searchTerm) ||
      (item.notes || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'new' && (!item.status || item.status === 'new')) ||
      item.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#0F2144] text-white px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-white/10 p-1 flex items-center justify-center shrink-0">
            <img src="./logo-emblem-gold.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold tracking-tight">HÒA & CỘNG SỰ — CỔNG QUẢN TRỊ NỘI BỘ</h1>
            <p className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">Tiếp nhận hồ sơ & Quản trị vụ việc</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-xs text-slate-200 hover:text-white px-3 py-1.5 rounded border border-white/20 hover:bg-white/10 transition-colors"
          >
            ← Về trang chủ
          </button>
          {currentUser && (
            <button
              onClick={handleLogout}
              className="text-xs bg-red-600/80 hover:bg-red-600 text-white px-3 py-1.5 rounded transition-colors"
            >
              Đăng xuất
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-4 sm:p-8 max-w-7xl mx-auto w-full">
        {isAuthLoading ? (
          <div className="py-20 text-center text-slate-500 text-sm">
            Đang xác thực thông tin tài khoản...
          </div>
        ) : !currentUser ? (
          /* Màn hình đăng nhập dành cho Luật sư */
          <div className="max-w-md mx-auto my-12 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center space-y-6">
            <div className="w-14 h-14 bg-[#0F2144] rounded-2xl p-2.5 mx-auto flex items-center justify-center">
              <img src="./logo-emblem-gold.png" alt="Emblem" className="w-full h-full object-contain" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F2144]">Đăng Nhập Cổng Luật Sư</h2>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Khu vực dành riêng cho Luật sư và Ban Quản trị Công ty Luật TNHH Hòa & Cộng sự.
              </p>
            </div>

            {authError && (
              <div className="p-3 text-xs bg-red-50 text-red-700 rounded-lg border border-red-200 text-left">
                {authError}
              </div>
            )}

            <button
              onClick={handleGoogleLogin}
              className="w-full py-3.5 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-3 shadow-sm transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>Đăng nhập với Google</span>
            </button>

            <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-100 leading-relaxed">
              Hệ thống bảo mật xác thực bởi Google Firebase. Chỉ email trong danh sách quản trị viên được cấp quyền truy cập dữ liệu.
            </div>
          </div>
        ) : !isAuthorizedAdmin(currentUser) ? (
          /* Màn hình chặn truy cập khi tài khoản Google không thuộc danh sách luật sư */
          <div className="max-w-md mx-auto my-12 bg-white rounded-2xl border border-red-200 p-8 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto text-xl font-bold">
              ✕
            </div>
            <h2 className="text-lg font-bold text-red-700">Truy Cập Bị Từ Chối</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tài khoản <strong>{currentUser.email}</strong> chưa được phân quyền Quản trị viên tại Hãng luật Hoà & Cộng sự.
            </p>
            <div className="pt-4">
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 rounded-lg bg-[#0F2144] text-white text-xs font-semibold hover:bg-[#162A56] transition-colors"
              >
                Đăng xuất & Đổi tài khoản khác
              </button>
            </div>
          </div>
        ) : (
          /* Giao diện Bảng điều khiển Quản trị viên & Luật sư */
          <div className="space-y-6">
            {/* Thanh thông tin luật sư & Thống kê nhanh */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={currentUser.photoURL || './logo-emblem-gold.png'}
                  alt={currentUser.displayName || 'Luật sư'}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-bold text-[#0F2144]">
                      {currentUser.displayName || 'Luật sư Điều Hành'}
                    </h2>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full uppercase">
                      Admin
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{currentUser.email}</p>
                </div>
              </div>

              {/* Thẻ thống kê nhanh */}
              <div className="flex items-center gap-3 text-xs">
                <div className="bg-slate-100 px-3.5 py-2 rounded-lg">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Tổng hồ sơ</span>
                  <span className="text-base font-extrabold text-[#0F2144]">{inquiries.length}</span>
                </div>
                <div className="bg-amber-50 border border-amber-200 px-3.5 py-2 rounded-lg">
                  <span className="text-amber-800 block text-[10px] uppercase font-semibold">Chưa xử lý</span>
                  <span className="text-base font-extrabold text-amber-900">
                    {inquiries.filter((i) => !i.status || i.status === 'new').length}
                  </span>
                </div>
              </div>
            </div>

            {/* Thanh công cụ tìm kiếm và lọc */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Tìm theo tên, SĐT hoặc nội dung..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0F2144]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto text-xs font-semibold">
                <span className="text-slate-500 shrink-0">Lọc theo:</span>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0F2144] bg-white"
                >
                  <option value="all">Tất cả ({inquiries.length})</option>
                  <option value="new">Mới tiếp nhận ({inquiries.filter(i => !i.status || i.status === 'new').length})</option>
                  <option value="contacted">Đã liên hệ ({inquiries.filter(i => i.status === 'contacted').length})</option>
                  <option value="in_progress">Đang thụ lý ({inquiries.filter(i => i.status === 'in_progress').length})</option>
                  <option value="completed">Đã hoàn tất ({inquiries.filter(i => i.status === 'completed').length})</option>
                </select>
              </div>
            </div>

            {/* Bảng danh sách yêu cầu tư vấn */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#0F2144] uppercase tracking-wider">
                  Danh Sách Khách Hàng Gửi Yêu Cầu Tư Vấn
                </h3>
                <span className="text-xs text-slate-500">Hiển thị {filteredInquiries.length} hồ sơ</span>
              </div>

              {isDataLoading ? (
                <div className="py-12 text-center text-xs text-slate-500">Đang tải dữ liệu hồ sơ từ đám mây...</div>
              ) : filteredInquiries.length === 0 ? (
                <div className="py-14 text-center text-slate-500 space-y-2">
                  <p className="text-sm font-medium">Chưa có hồ sơ yêu cầu tư vấn nào phù hợp.</p>
                  <p className="text-xs text-slate-500">Dữ liệu từ trang liên hệ của khách hàng sẽ tự động xuất hiện tại đây theo thời gian thực.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {filteredInquiries.map((item) => {
                    const formattedDate = item.createdAt?.toDate
                      ? item.createdAt.toDate().toLocaleString('vi-VN')
                      : typeof item.createdAt === 'string'
                      ? new Date(item.createdAt).toLocaleString('vi-VN')
                      : 'Vừa xong';

                    const status = item.status || 'new';

                    return (
                      <div key={item.id} className="p-5 hover:bg-slate-50/70 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="space-y-2 max-w-2xl">
                            <div className="flex items-center gap-3">
                              <span className="text-base font-bold text-[#0F2144]">{item.fullName}</span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border ${
                                status === 'new' 
                                  ? 'bg-amber-50 text-amber-900 border-amber-300' 
                                  : status === 'contacted'
                                  ? 'bg-blue-50 text-blue-900 border-blue-300'
                                  : status === 'in_progress'
                                  ? 'bg-purple-50 text-purple-900 border-purple-300'
                                  : 'bg-emerald-50 text-emerald-900 border-emerald-300'
                              }`}>
                                {status === 'new' && 'Mới tiếp nhận'}
                                {status === 'contacted' && 'Đã liên hệ'}
                                {status === 'in_progress' && 'Đang thụ lý'}
                                {status === 'completed' && 'Đã hoàn tất'}
                              </span>
                              <span className="text-[11px] text-slate-500">{formattedDate}</span>
                            </div>

                            <div className="flex items-center gap-4 text-xs">
                              <a
                                href={`tel:${item.phone}`}
                                className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200"
                              >
                                <PhoneIcon className="w-3.5 h-3.5" />
                                <span>{item.phone}</span>
                              </a>
                            </div>

                            <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80 leading-relaxed whitespace-pre-wrap font-sans">
                              {item.notes}
                            </div>
                          </div>

                          {/* Hành động của luật sư */}
                          <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0">
                            <select
                              value={status}
                              onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
                              className="text-xs px-2.5 py-1.5 rounded border border-slate-300 bg-white font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#0F2144]"
                            >
                              <option value="new">Mới tiếp nhận</option>
                              <option value="contacted">Đã liên hệ</option>
                              <option value="in_progress">Đang thụ lý</option>
                              <option value="completed">Đã hoàn tất</option>
                            </select>

                            <button
                              onClick={() => handleDelete(item.id)}
                              className="text-xs text-red-600 hover:text-red-800 hover:bg-red-50 px-2.5 py-1.5 rounded transition-colors"
                            >
                              Xóa
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
