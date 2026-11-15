# HỒ SƠ TUÂN THỦ BẢO VỆ DỮ LIỆU CÁ NHÂN (DPIA & CTIA)
**Áp dụng theo Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Nghị định số 356/2025/NĐ-CP**

- **Đơn vị lập hồ sơ:** Công ty Luật TNHH Hoà và Cộng sự (*Hoa & Associates Law Firm LLC*)
- **Mã phiên bản Thư chấp thuận tương ứng:** `HP-PDPL-02/2026`
- **Hệ thống áp dụng:** Website giới thiệu & Biểu mẫu tiếp nhận yêu cầu tư vấn trực tuyến (`hoa-partners` / Google Firebase)
- **Ngày lập hồ sơ dự thảo:** 15/11/2026 *(Cần Luật sư Giám đốc rà soát các mục `[Điền: ...]`, ký ban hành nội bộ và nộp tới Cục A05 theo quy định)*

---

## PHẦN I. THẨM ĐỊNH NGHĨA VỤ PHÁP LÝ & ĐIỀU KIỆN MIỄN TRỪ

### 1. Căn cứ pháp lý áp dụng (hiệu lực từ 01/01/2026)
- **Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15** (Điều 9, Điều 21, Điều 22, Điều 23, Điều 33, Điều 38).
- **Nghị định số 356/2025/NĐ-CP** ngày 31/12/2025 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật Bảo vệ dữ liệu cá nhân (Điều 5, Điều 17, Điều 18, Điều 19, Điều 29, Điều 41 và Phụ lục biểu mẫu **Mẫu số 08, Mẫu số 09, Mẫu số 10**).
- **Luật Luật sư** (Điều 25 về nghĩa vụ giữ bí mật thông tin của khách hàng).

### 2. Phân tích lý do KHÔNG áp dụng miễn trừ đối với Công ty Luật
Theo Điều 38 Luật 91/2025/QH15 và Điều 41 Nghị định 356/2025/NĐ-CP, doanh nghiệp nhỏ và doanh nghiệp khởi nghiệp được lựa chọn miễn/hoãn thực hiện hồ sơ đánh giá tác động trong 05 năm, còn hộ kinh doanh và doanh nghiệp siêu nhỏ được miễn trừ, **NGOẠI TRỪ** trường hợp tổ chức có hoạt động:
1. Kinh doanh dịch vụ xử lý dữ liệu cá nhân;
2. **Trực tiếp xử lý dữ liệu cá nhân nhạy cảm**; hoặc
3. Xử lý dữ liệu cá nhân đạt quy mô từ 100.000 chủ thể dữ liệu trở lên.

**Kết luận thẩm định:** Hoạt động hành nghề luật sư trong lĩnh vực Dân sự, Đất đai – Bất động sản, Thừa kế, Hợp đồng, Hôn nhân và Gia đình, Bồi thường thiệt hại thường xuyên **trực tiếp tiếp nhận và xử lý dữ liệu cá nhân nhạy cảm** (thông tin bí mật đời tư, quan hệ gia đình, quyền tài sản/nhà đất, thông tin tài chính, hồ sơ sức khỏe/thương tật, hồ sơ tố tụng). Đồng thời, website tiếp nhận yêu cầu tư vấn lưu trữ bản ghi trên nền tảng **Google Firebase / Cloud Firestore (`projectId: hoa-partners`)** có máy chủ đặt ngoài lãnh thổ Việt Nam. Do đó, Công ty Luật thuộc ngoại lệ không được miễn trừ và cần lập đầy đủ cả **Mẫu số 10 (DPIA)** và **Mẫu số 09 (CTIA)**, cùng phương án ứng phó sự cố **Mẫu số 08**.

---

## PHẦN II. DỰ THẢO BÁO CÁO ĐÁNH GIÁ TÁC ĐỘNG XỬ LÝ DỮ LIỆU CÁ NHÂN (MẪU SỐ 10)
*(Tham chiếu Phụ lục Nghị định số 356/2025/NĐ-CP — Điều 19 Nghị định 356/2025/NĐ-CP)*

### 1. Thông tin Bên kiểm soát và xử lý dữ liệu cá nhân
- **Tên tổ chức:** Công ty Luật TNHH Hoà và Cộng sự (*Hoa & Associates Law Firm LLC*)
- **Giấy đăng ký hoạt động số:** `[Điền: Số Giấy ĐKHD của Sở Tư pháp cấp]`
- **Trụ sở chính:** 9/12 Chu Huy Mân, phường Tân An, tỉnh Đắk Lắk
- **Văn phòng đại diện:** 2A Đường 33, phường Bình Trưng, TP. Hồ Chí Minh
- **Người đại diện theo pháp luật / Luật sư Giám đốc:** Luật sư Võ Văn Hoà
- **Điện thoại liên hệ:** 098.888.6447 | **Email:** gautamahoa@gmail.com
- **Bên xử lý dữ liệu (Hạ tầng lưu trữ đám mây):** Google LLC / Google Cloud – Firebase (`projectId: hoa-partners`), phạm vi cung cấp hạ tầng cơ sở dữ liệu Cloud Firestore và xác thực OAuth cho cổng quản trị.

### 2. Thông tin Bộ phận / Nhân sự bảo vệ dữ liệu cá nhân
- **Nhân sự phụ trách chính:** Luật sư Võ Văn Hoà — Giám đốc Công ty Luật *(hoặc `[Điền: Họ tên nhân sự/bộ phận phụ trách BVDLCN theo tiêu chuẩn Điều 19 NĐ 356/2025/NĐ-CP]`)*
- **Kênh tiếp nhận yêu cầu của Chủ thể dữ liệu:** Hotline `098.888.6447` | Email `gautamahoa@gmail.com`

### 3. Mục đích, phân loại dữ liệu và thời hạn xử lý
- **Mục đích Nhóm A (Thiết yếu tiếp nhận & cung ứng dịch vụ pháp lý):**
  1. Xác minh danh tính & kiểm tra xung đột lợi ích theo Luật Luật sư;
  2. Tiếp nhận, nghiên cứu tình tiết vụ việc, phản hồi tư vấn và thực hiện dịch vụ pháp lý theo yêu cầu;
  3. Lưu trữ hồ sơ hành nghề, thực hiện nghĩa vụ thuế, kế toán và yêu cầu hợp pháp của cơ quan có thẩm quyền;
  4. Bảo vệ quyền và lợi ích hợp pháp của Khách hàng và Công ty Luật.
- **Mục đích Nhóm B (Vận hành nền tảng trực tuyến & hỗ trợ liên lạc):**
  1. Vận hành, bảo mật biểu mẫu trực tuyến chống bot/spam và truy cập trái phép;
  2. Chủ động liên hệ qua điện thoại, Zalo hoặc email theo thông tin khách hàng tự nguyện gửi để giải đáp tư vấn (không gửi quảng cáo đại trà).
- **Danh mục dữ liệu cá nhân thu thập qua Biểu mẫu website (`consultations`):**
  - *Dữ liệu cá nhân cơ bản:* Họ và tên (`fullName`), Số điện thoại (`phone`), ngôn ngữ giao diện (`lang`), mốc thời gian gửi (`createdAt`), bằng chứng xác nhận đồng ý (`consentVersion: HP-PDPL-02/2026`, `consentAcceptedAt`).
  - *Dữ liệu cá nhân có khả năng phát sinh dữ liệu nhạy cảm:* Nội dung tóm tắt vụ việc (`notes`) do khách hàng chủ động mô tả (có thể chứa thông tin tranh chấp tài sản, gia đình, sức khỏe, tố tụng); sau khi ký Hợp đồng dịch vụ pháp lý sẽ tiếp nhận hồ sơ chi tiết trực tiếp tại văn phòng/kênh bảo mật riêng.
- **Thời hạn lưu trữ:**
  - Yêu cầu tư vấn sơ bộ không ký hợp đồng dịch vụ pháp lý: lưu tối đa **24 tháng** kể từ lần liên hệ cuối cùng (phục vụ kiểm tra xung đột lợi ích) hoặc xóa sớm hơn ngay khi nhận được yêu cầu hợp lệ.
  - Hồ sơ vụ việc đã giao kết Hợp đồng dịch vụ pháp lý: lưu theo thời hạn hợp đồng, thời hiệu khởi kiện/giải quyết tranh chấp và quy định lưu trữ hồ sơ luật sư.

### 4. Sơ đồ luồng xử lý dữ liệu (Data Mapping)
1. **Thu thập (Frontend SPA — GitHub Pages / HTTPS):** Khách hàng truy cập `#/lien-he`, đọc bản chỉ xem PDF `Thư chấp thuận (Mã HP-PDPL-02/2026)`, tự tay đánh dấu đồng ý (`consent` mặc định `false`, ghi nhận `consentVersion` + `consentAcceptedAt`) và gửi Biểu mẫu.
2. **Làm sạch & kiểm soát chống lạm dụng (Client-side Validation):** Loại bỏ thẻ HTML/ký tự điều khiển (`sanitizeInput`), kiểm tra định dạng SĐT (`isValidPhone`), chặn gửi tự động bằng Honeypot (`botField`) và giới hạn tần suất theo phiên (`cooldown 60s`, tối đa 5 lần/phiên), không lưu PII vào `localStorage`.
3. **Truyền tải & Lưu trữ (Google Cloud Firestore `hoa-partners`):** Truyền tải qua kết nối mã hóa TLS/HTTPS; kiểm tra cấu trúc nghiêm ngặt tại tầng máy chủ bằng `firestore.rules` (`isValidConsultationCreate` chỉ cho phép các trường định sẵn, `createdAt`, `consentVersion`, `consentAcceptedAt` khóa bất biến).
4. **Khai thác & Quản trị nội bộ (`#/admin`):** Chỉ tài khoản Google đã xác thực email nằm trong danh sách cho phép (`gautamahoa@gmail.com`, `vovanhoa.bank@gmail.com` với `email_verified == true` trong `isAdmin()`) mới có quyền đọc, cập nhật trạng thái (`new`, `contacted`, `in_progress`, `completed`), thêm `lawyerNotes`, xuất CSV (đã chống lỗi CSV Formula Injection + gắn dấu vết `consentVersion`/`consentAcceptedAt`) hoặc xóa bản ghi.

### 5. Đánh giá rủi ro và biện pháp bảo vệ áp dụng
| Nguy cơ / Tác động tiềm ẩn | Mức độ | Biện pháp giảm thiểu đã & đang áp dụng |
| :--- | :--- | :--- |
| Lộ lọt thông tin vụ việc nhạy cảm qua truy cập trái phép | Cao | Khóa quyền đọc/sửa/xóa toàn bộ collection `consultations` cho tới khi xác thực `isAdmin()` + `email_verified`; chặn toàn bộ collection khác (`allow read, write: if false`). |
| Không chứng minh được sự đồng ý hợp lệ (Khoản 3 Điều 9) | Cao | Checkbox không tick sẵn; hiển thị toàn văn PDF chỉ xem (`HP-PDPL-02/2026`); ghi nhận trường bất biến `consentVersion` & `consentAcceptedAt` trong mỗi document Firestore và CSV kiểm toán. |
| Gửi dữ liệu giả mạo, XSS hoặc lộ dữ liệu trên máy khách | Trung bình | `sanitizeInput` lọc HTML/script; không lưu dữ liệu khách vào `localStorage`; xuất CSV thoát công thức (`= + - @`). |
| Chậm giải quyết yêu cầu rút đồng ý / xóa dữ liệu | Trung bình | Quy trình nội bộ cam kết phản hồi trong **02 ngày làm việc**, xóa/ngừng xử lý trong **15 ngày** (hoặc **20 ngày** nếu liên quan bên thứ ba) trên trang `#/admin`. |

---

## PHẦN III. DỰ THẢO BÁO CÁO ĐÁNH GIÁ TÁC ĐỘNG CHUYỂN DỮ LIỆU CÁ NHÂN XUYÊN BIÊN GIỚI (MẪU SỐ 09)
*(Tham chiếu Phụ lục Nghị định số 356/2025/NĐ-CP — Điều 17 & Điều 18 Nghị định 356/2025/NĐ-CP)*

### 1. Thông tin Bên chuyển dữ liệu & Bên tiếp nhận dữ liệu
- **Bên chuyển dữ liệu (tại Việt Nam):** Công ty Luật TNHH Hoà và Cộng sự — 9/12 Chu Huy Mân, phường Tân An, tỉnh Đắk Lắk.
- **Bên tiếp nhận lưu trữ hạ tầng (ngoài lãnh thổ Việt Nam):** Google LLC (đơn vị cung cấp nền tảng Google Cloud / Firebase) — Mã dự án: `hoa-partners` (`authDomain: hoa-partners.firebaseapp.com`).
  - *Vị trí lưu trữ dữ liệu (Firestore GCP Location):* `[Điền: Kiểm tra tại Firebase Console -> Project Settings -> Default GCP resource location, ví dụ: asia-southeast1 (Singapore) hoặc nam5 (United States)]`
  - *Thỏa thuận xử lý dữ liệu ràng buộc:* Google Cloud Data Processing Addendum (CDPA) & Firebase Data Processing and Security Terms tích hợp trong hợp đồng sử dụng dịch vụ điện toán đám mây của dự án `hoa-partners`.

### 2. Phạm vi, mục đích & luồng chuyển dữ liệu xuyên biên giới
- **Mục đích chuyển:** Chỉ nhằm mục đích lưu trữ an toàn cơ sở dữ liệu trực tuyến phục vụ tiếp nhận yêu cầu đặt lịch tư vấn từ website (`web_contact_form`) và đồng bộ tức thời cho Luật sư Điều hành thụ lý qua Cổng quản trị (`#/admin`). Công ty Luật không bán, không chia sẻ dữ liệu khách hàng cho bên thứ ba thương mại và **không đưa dữ liệu vụ việc vào huấn luyện các mô hình AI công cộng**.
- **Nhóm dữ liệu chuyển ra nước ngoài:** Họ tên, Số điện thoại, Tóm tắt nội dung vụ việc, Ngôn ngữ, Thời điểm gửi và Bằng chứng đồng ý (`consentVersion`, `consentAcceptedAt`).
- **Sơ đồ luồng:** Trình duyệt Khách hàng (Việt Nam) $\xrightarrow{\text{HTTPS / TLS 1.3}}$ Cloud Firestore (`hoa-partners`, máy chủ ngoài Việt Nam) $\xrightarrow{\text{OAuth 2.0 HTTPS}}$ Trình duyệt Luật sư Điều hành tại Việt Nam (`#/admin`).

### 3. Cơ chế đồng ý của Chủ thể dữ liệu
- Khách hàng được thông báo công khai tại **Điều 3 mục 3** của `Thư chấp thuận (Mã HP-PDPL-02/2026)` về việc dữ liệu biểu mẫu trực tuyến lưu trên hạ tầng Google Firebase / Google Cloud đặt máy chủ ngoài lãnh thổ Việt Nam.
- Ngoài ra, **Điều 2** của Thư chấp thuận nêu rõ lựa chọn thay thế không chuyển dữ liệu qua biểu mẫu cloud: Khách hàng có thể gọi trực tiếp Hotline **098.888.6447** hoặc đến trực tiếp Trụ sở/Văn phòng đại diện.

### 4. Đánh giá rủi ro xuyên biên giới & Biện pháp bảo vệ
- **Rủi ro:** Độ trễ hoặc gián đoạn kết nối quốc tế; nguy cơ phụ thuộc hạ tầng nhà cung cấp đám mây nước ngoài; yêu cầu tiếp cận từ cơ quan tài phán nước ngoài (nếu có).
- **Biện pháp bảo vệ:**
  1. Dữ liệu trên Cloud Firestore được Google mã hóa mặc định khi truyền tải (in-transit TLS) và khi lưu trữ (at-rest AES-256).
  2. Hạn chế tối đa lượng dữ liệu đẩy lên cloud (nguyên tắc tối thiểu hóa — biểu mẫu web chỉ thu Họ tên, SĐT và Tóm tắt ngắn; chứng cứ, CCCD, Sổ đỏ, hồ sơ bệnh án chỉ tiếp nhận trực tiếp sau khi ký hợp đồng).
  3. Toàn bộ quyền quản trị Firebase Console và `#/admin` giới hạn cho tài khoản xác thực đa lớp (2FA) của Luật sư Giám đốc (`gautamahoa@gmail.com`, `vovanhoa.bank@gmail.com`).
  4. Thực hiện xóa bản ghi ngay trên Cloud Firestore tại `#/admin` khi hết mục đích xử lý hoặc khi có yêu cầu rút đồng ý/xóa dữ liệu hợp lệ.

---

## PHẦN IV. QUY TRÌNH ỨNG PHÓ SỰ CỐ 72 GIỜ (MẪU SỐ 08) & CHECKLIST THỰC THI

### 1. Quy trình xử lý khi phát hiện vi phạm / lộ lọt dữ liệu (Điều 23 Luật 91/2025 & Điều 29 NĐ 356/2025)
1. **0 – 4 giờ đầu (Cô lập sự cố):**
   - Thu hồi phiên đăng nhập quản trị, kiểm tra log truy cập bất thường trên Firebase Console / Google Account.
   - Đổi mật khẩu, khóa API/quyền truy cập nếu nghi ngờ lộ tài khoản admin, hoặc tạm khóa `allow read, write: if false;` trong `firestore.rules` nếu phát hiện lỗ hổng cấu hình.
2. **4 – 48 giờ (Đánh giá phạm vi & khắc phục):**
   - Thống kê số lượng hồ sơ tư vấn và loại dữ liệu cá nhân (cơ bản/nhạy cảm) bị ảnh hưởng; lập biên bản ghi nhận nguyên nhân và biện pháp khắc phục kỹ thuật.
3. **Chậm nhất 72 giờ kể từ khi phát hiện (Báo cáo bắt buộc):**
   - Lập **Thông báo vi phạm quy định về bảo vệ dữ liệu cá nhân theo Mẫu số 08** (kèm thời gian, địa điểm, loại dữ liệu bị ảnh hưởng, hậu quả dự kiến, đầu mối liên hệ Luật sư Võ Văn Hoà và biện pháp khắc phục đã triển khai).
   - Gửi **Mẫu số 08** tới Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (**A05 — Bộ Công an**) hoặc qua Cổng thông tin quốc gia về bảo vệ dữ liệu cá nhân.
   - Thông báo trực tiếp cho Chủ thể dữ liệu bị ảnh hưởng qua số điện thoại/kênh liên lạc đã cung cấp theo đúng quy định.

### 2. Checklist hoàn tất thủ tục pháp lý (Dành cho Luật sư Điều hành)
- [ ] **Bước 1 (Kiểm tra vùng máy chủ):** Đăng nhập [Firebase Console](https://console.firebase.google.com/) $\rightarrow$ chọn dự án `hoa-partners` $\rightarrow$ *Project Settings* $\rightarrow$ ghi nhận chính xác **Default GCP resource location** điền vào Phần III mục 1 ở trên.
- [ ] **Bước 2 (Tải thỏa thuận DPA với Google):** Lưu bản PDF thỏa thuận *Google Cloud Data Processing Addendum (CDPA)* của tài khoản Google Workspace / Firebase làm tài liệu đính kèm bắt buộc của Hồ sơ Mẫu số 09 & Mẫu số 10.
- [ ] **Bước 3 (Ký ban hành & Lưu giữ / Nộp Cục A05):**
  - Hoàn thiện các phần `[Điền: ...]` theo mẫu chuẩn **Mẫu số 09** và **Mẫu số 10** ban hành kèm Phụ lục Nghị định 356/2025/NĐ-CP.
  - Ký đóng dấu Công ty Luật TNHH Hoà và Cộng sự, lưu trữ sẵn 01 bộ tại Trụ sở chính (đáp ứng thanh tra/kiểm tra) và gửi thông báo nộp hồ sơ (theo Mẫu số 01a kèm hồ sơ chuyển dữ liệu xuyên biên giới) tới **Cục A05 — Bộ Công an** trong thời hạn **60 ngày** theo Điều 18 Nghị định 356/2025/NĐ-CP (qua Cổng thông tin quốc gia về BVDLCN hoặc nộp trực tiếp/bưu chính).

### 3. Triển khai kỹ thuật Firestore Security Rules
Sau khi rà soát file `firestore.rules` đã cập nhật cho phép trường bất biến `consentVersion` và `consentAcceptedAt`, chạy lệnh sau từ thư mục gốc `hoa-partners-lawfirm` trên máy có đăng nhập Firebase CLI (`firebase login`):

```bash
npx firebase-tools deploy --only firestore:rules
```
