# ĐỒ ÁN MÔN LẬP TRÌNH WEB — KHOA CNTT (UTH K24)
## CỔNG THÔNG TIN NHÓM 11 & HỒ SƠ FLAGSHIP TRẦN NGỌC LÂM

---

### 1. Giới Thiệu Đồ Án
- **Môn học:** Lập Trình Web (Web Programming)
- **Đơn vị:** Khoa Công Nghệ Thông Tin — Trường Đại học Giao thông vận tải TP.HCM (UTH)
- **Khóa:** 2024 (K24)
- **Tập thể:** Nhóm 11 (6 thành viên)

---

### 2. Cấu Trúc Thư Mục Chuẩn (Pure HTML5 / CSS3 / Vanilla JS)
```text
Group11_Portfolio/
├── group11.html             # Cổng thông tin chính thức Nhóm 11
├── index.html               # Trang chủ (đồng bộ 100% với group11.html)
├── TapHoa36.html            # Dự án Bách hóa trực tuyến TapHoa36 của Trần Ngọc Lâm
├── css/
│   └── style.css            # Styling Cổng nhóm: Luxury Black, Trục Neon, Khối 3D, Nền RGB
├── js/
│   └── main.js              # JS: Parallax cuộn, Xoay 3D Cube & Gyro, Avatar Flip 720° Flash RGB
└── profile/                 # Module hồ sơ cá nhân Flagship
    ├── lam.html             # Trang cá nhân chuẩn Flagship của Trần Ngọc Lâm (Edition 2006)
    ├── css/
    │   └── profile.css      # Styling: Bento Grid, Sticky Subnav & ScrollSpy, Specs Sheet
    └── js/
        └── profile.js       # GSAP ScrollTrigger: Pinned Hero, Zoom on Scroll, Thanh đo kỹ năng
```

---

### 3. Danh Sách Thành Viên Nhóm 11
1. **Nguyễn Vương Quốc Huy:** Nhóm trưởng (Leader) — Huy hiệu vương miện hoàng gia vàng óng (`👑 Nhóm trưởng`).
2. **Trần Ngọc Lâm:** Thành viên nòng cốt — Sở hữu hồ sơ cá nhân Flagship tại `profile/lam.html`.
3. **Mai Hoàng Danh:** Thành viên.
4. **Nguyễn Minh Hiếu:** Thành viên.
5. **Võ Tuấn Kiệt:** Thành viên.
6. **Phạm Chấn Nguyên:** Thành viên.

---

### 4. Thông Tin Cá Nhân Trần Ngọc Lâm
- **Họ và tên:** Trần Ngọc Lâm
- **Năm sinh:** 2006 (20 tuổi)
- **Quê quán:** Thái Bình
- **Học vấn:** Sinh viên Khoa CNTT, Đại học Giao thông vận tải TP.HCM (UTH), Khóa 2024
- **Bản sắc:** Thích đi dạo làm mới tư duy sáng tạo; tính cách hòa đồng, thân thiện, biết lắng nghe và có trách nhiệm cao
- **Mục tiêu:**
  - *Ngắn hạn:* Kiếm tiền (Áp dụng HTML và công nghệ web vào dự án thực tế)
  - *Dài hạn:* Kiếm thật nhiều tiền (Kỹ sư phần mềm giá trị cao, tự do tài chính bền vững)
- **Liên hệ:** lam229226@gmail.com

---

### 5. Điểm Nhấn Công Nghệ & Hiệu Ứng Thị Giác
1. **Giao diện Tối giản Sang trọng (Luxury Black):** Nền đen obsidian `#030303` với ánh sáng ambient glow.
2. **Màu Nền (Background) Tự Động Đổi Sắc RGB Khi Cuộn Chuột:** Toàn bộ màu nền (`--bg-color`, `body`, `.ambient-bg`) chuyển đổi mượt mà theo từng pixel cuộn chuột qua toàn dải quang phổ RGB.
3. **Các Khối 3D HTML/CSS Lơ Lửng:** Khối lập phương `Cube 3D` và con quay `Gyroscope 3D` xoay góc không gian thực theo thao tác cuộn chuột.
4. **Trục Neon Trung Tâm (Street Timeline):** Dải neon phát sáng chạy dọc tự động lấp đầy theo thanh cuộn chuột, các thẻ thành viên trượt vào từ 2 bên lề (`burst-fade`).
5. **Tương Tác Avatar Điện Ảnh:** Nhấp chuột vào avatar kích hoạt chuỗi hiệu ứng: Xoay lật 3D 720° $\rightarrow$ Chớp sáng RGB toàn màn hình $\rightarrow$ Màn đêm Fade to Black $\rightarrow$ Chuyển hướng sang `profile/lam.html`.
6. **Hồ Sơ Flagship Trần Ngọc Lâm (`profile/lam.html`):** GSAP 3.12.5 ScrollTrigger ghim khung nhìn (pin 700px), đĩa quang học xoay 30° và phóng to 1.55x, lưới Bento Grid mục tiêu, con trỏ chuột cao cấp (custom cursor) và thanh tiến độ cuộn trang.
7. **Dự Án TapHoa36 (`TapHoa36.html`):** Nền tảng bách hóa trực tuyến với giỏ hàng tương tác, bộ lọc danh mục và thanh tìm kiếm sản phẩm.

---

### 6. Hướng Dẫn Sử Dụng
- Không cần cài đặt `node_modules` hay bất kỳ thư viện phức tạp nào.
- Chỉ cần nhấp đúp trực tiếp vào file `index.html` hoặc `group11.html` để mở ngay trên trình duyệt (Google Chrome, Microsoft Edge, Firefox, Safari) hoặc chạy với tiện ích Live Server trong VS Code.
