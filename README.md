# Báo cáo Thực hành Kiểm thử Phần mềm

Repo lưu trữ bài tập thực hành trong học phần Kiểm thử phần mềm.

## 📝 Thông tin sinh viên

- Họ và tên: Đào Nguyên Anh
- Mã sinh viên: BIT230023
- Lớp: 23IT-GM

## 🎨 Tuần 1: Trải nghiệm UI & Kiểm thử Đơn vị (JUnit)

### 1. Trải nghiệm Giao diện (UI Experience)

- Ngày thực hiện: 08/01/2026
- Hoạt động: Trải nghiệm chất lượng giao diện với ứng dụng Cantunsee để rèn luyện kỹ năng phân biệt các chi tiết thiết kế nhỏ.
- Kết quả: Đạt điểm số cao trong thử thách phân biệt thiết kế.

<img width="1886" height="858" alt="UI Experience" src="https://github.com/user-attachments/assets/51364877-8eae-433d-bc7f-53f8ba219008" />

### 2. Kiểm thử Đơn vị với JUnit 5 (Student Grade Analyzer)

**Giới thiệu**

- Phân tích danh sách điểm số học sinh, dùng JUnit 5 để đảm bảo tính đúng đắn thuật toán.

**Chức năng chính**

- `countExcellentStudents`: Đếm số học sinh đạt Giỏi (>= 8.0).
- `calculateValidAverage`: Tính trung bình điểm hợp lệ (0 đến 10).
- Validation: Bỏ qua dữ liệu lỗi (điểm âm hoặc > 10).

**Cấu trúc thư mục** (trong `./unit-test`)

- `app/src/main/java/tester/`: Mã nguồn logic (`StudentAnalyzer.java`).
- `app/src/test/java/tester/`: Mã kiểm thử (`StudentAnalyzerTest.java`).

**Cách chạy**

```bash
cd unit-test
./gradlew build
./gradlew test
```

**Kết quả kiểm thử**

- 100% test case pass.
- Trường hợp kiểm thử: danh sách thường (trộn hợp lệ/không hợp lệ), biên (trống/0/10), ngoại lệ (toàn bộ điểm lỗi).
- Báo cáo HTML: `unit-test/app/build/reports/tests/test/index.html`.

## 🧪 Tuần 2: Kiểm thử Tự động E2E với Cypress

**Giới thiệu**

- Tự động E2E trên trang mẫu Saucedemo.

**Kịch bản chính (trong `./cypress-test`)**

- Đăng nhập (`login_spec.cy.js`): Đăng nhập thành công với `standard_user` và hiển thị lỗi khi thông tin sai.
- Giỏ hàng (`cart_spec.cy.js`): Thêm sản phẩm, kiểm tra badge số lượng; lọc "Price low to high"; nút Remove đưa giỏ về 0; checkout điền thông tin (John Doe, 12345) và điều hướng tới `/checkout-step-two.html`.

**Cách chạy**

```bash
cd cypress-test
npx cypress open
```

**Quy trình quản lý Issue & Commit**
<img width="1918" height="837" alt="issue-board" src="https://github.com/user-attachments/assets/5d7ccdfe-4c55-47a4-93d3-a6c9c2d203f0" />
<img width="1919" height="845" alt="commit-history-1" src="https://github.com/user-attachments/assets/21513b0a-8858-42b8-bf4a-addf731f9200" />
<img width="1919" height="845" alt="commit-history-2" src="https://github.com/user-attachments/assets/184638b4-f42a-4e4a-9fd3-d25bef9c4137" />
