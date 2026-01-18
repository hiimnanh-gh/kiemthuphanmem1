# Báo cáo Thực hành Kiểm thử Phần mềm

Repo này lưu trữ toàn bộ các bài tập thực hành trong học phần Kiểm thử phần mềm.

## 📝 Thông tin sinh viên
- **Họ và tên:** [Đào Nguyên Anh]
- **Mã sinh viên:** [BIT230023]
- **Lớp:** [23IT-GM]

---

## 🎨 Tuần 1: Trải nghiệm UI & Kiểm thử Đơn vị (JUnit)

### 1. Trải nghiệm Giao diện (UI Experience)
- **Ngày thực hiện:** 08/01/26
- **Hoạt động:** Trải nghiệm chất lượng giao diện với Cantunsee.
- **Kết quả:** Đạt điểm số cao trong thử thách phân biệt các chi tiết thiết kế UI.

<img width="1886" height="858" alt="image" src="https://github.com/user-attachments/assets/51364877-8eae-433d-bc7f-53f8ba219008" />

---------------------------------------------------------------------------------------------------------------------------------------------------------------

### 2. Kiểm thử Đơn vị với JUnit 5 (Unit Testing)
- **Ngày thực hiện:** 10/01/26
- **Chủ đề:** Phân tích dữ liệu điểm số học sinh.
- **Thư mục dự án:** `./unit-test`
- **Nội dung thực hiện:**
    - Triển khai lớp `StudentAnalyzer` với các phương thức `countExcellentStudents` và `calculateValidAverage`.
    - Áp dụng kỹ thuật Validation để bỏ qua điểm âm hoặc điểm lớn hơn 10.
    - Viết Unit Test với JUnit 5 bao gồm các trường hợp: bình thường, biên và ngoại lệ.
- **Cách chạy kiểm thử:**
- **Cách chạy kiểm thử:**
  ```bash
  cd unit-test
  ./gradlew test

Student Grade Analyzer - Kiểm thử Unit Test với JUnit 5

1. Giới thiệu bài tập
Dự án này thực hiện các chức năng phân tích danh sách điểm số của học sinh và sử dụng thư viện JUnit 5 để đảm bảo tính chính xác của các thuật toán.

Các chức năng chính:

countExcellentStudents: Đếm số lượng học sinh có điểm Giỏi (>= 8.0).

calculateValidAverage: Tính trung bình cộng của các đầu điểm hợp lệ (trong khoảng từ 0 đến 10).

Validation: Tự động bỏ qua các dữ liệu lỗi như điểm âm hoặc điểm lớn hơn 10.

2. Cấu trúc thư mục
Dự án được tổ chức theo tiêu chuẩn của Gradle:

app/src/main/java/tester/: Chứa mã nguồn logic (StudentAnalyzer.java).

app/src/test/java/tester/: Chứa mã kiểm thử (StudentAnalyzerTest.java).

3. Hướng dẫn chạy chương trình và kiểm thử
Yêu cầu hệ thống
Đã cài đặt Java JDK 17 hoặc mới hơn.

Sử dụng Terminal (Git Bash, PowerShell hoặc CMD).

Lệnh thực hiện
Build dự án:

Bash

./gradlew build
Chạy Unit Test:

Bash

./gradlew test

4. Kết quả kiểm thử
Tất cả các ca kiểm thử đã được thực hiện thành công 100%.

Các trường hợp đã kiểm thử:

Trường hợp bình thường: Danh sách có điểm hợp lệ xen kẽ điểm không hợp lệ.

Trường hợp biên: Danh sách trống, danh sách chỉ có điểm 0 hoặc điểm 10.

Trường hợp ngoại lệ: Danh sách chứa toàn bộ điểm sai (điểm âm hoặc > 10).

Báo cáo chi tiết (HTML Report): Sau khi chạy lệnh test, kết quả chi tiết có thể xem tại: app/build/reports/tests/test/index.html

5. Quy trình quản lý Issue
Dự án áp dụng quy trình làm việc chuyên nghiệp trên GitHub:

Tạo Issue cho từng đầu mục công việc.

Thực hiện Commit có gắn mã số Issue (#1, #2,...) để liên kết mã nguồn.

Sử dụng từ khóa closes #index để tự động đóng Issue khi hoàn tất.

---------------------------------------------------------------------------------------------------------------------------------------------------------------



