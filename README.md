Báo cáo Thực hành Kiểm thử Phần mềm
Repo này lưu trữ toàn bộ các bài tập thực hành trong học phần Kiểm thử phần mềm.

📝 Thông tin sinh viên
Họ và tên: Đào Nguyên Anh

Mã sinh viên: BIT230023

Lớp: 23IT-GM

🎨 Tuần 1: Trải nghiệm UI & Kiểm thử Đơn vị (JUnit)
1. Trải nghiệm Giao diện (UI Experience)
Ngày thực hiện: 08/01/2026

Hoạt động: Trải nghiệm chất lượng giao diện với ứng dụng Cantunsee để rèn luyện kỹ năng phân biệt các chi tiết thiết kế UI nhỏ nhất.

Kết quả: Đạt điểm số cao trong thử thách phân biệt các chi tiết thiết kế UI.

<img width="1886" height="858" alt="image" src="https://github.com/user-attachments/assets/51364877-8eae-433d-bc7f-53f8ba219008" />

2. Kiểm thử Đơn vị với JUnit 5 (Unit Testing)
Chủ đề: Phân tích dữ liệu điểm số học sinh (Student Grade Analyzer).

2.1. Giới thiệu bài tập
Dự án thực hiện các chức năng phân tích danh sách điểm số của học sinh và sử dụng thư viện JUnit 5 để đảm bảo tính chính xác của thuật toán.

Các chức năng chính:

countExcellentStudents: Đếm số lượng học sinh có điểm Giỏi (điểm từ 8.0 trở lên).

calculateValidAverage: Tính trung bình cộng của các đầu điểm hợp lệ (nằm trong khoảng từ 0 đến 10).

Validation: Hệ thống tự động bỏ qua các dữ liệu lỗi như điểm âm hoặc điểm lớn hơn 10.

2.2. Cấu trúc thư mục
Dự án được tổ chức theo tiêu chuẩn của Gradle bên trong thư mục ./unit-test:

app/src/main/java/tester/: Chứa mã nguồn logic (StudentAnalyzer.java).

app/src/test/java/tester/: Chứa mã kiểm thử (StudentAnalyzerTest.java).

2.3. Hướng dẫn chạy chương trình và kiểm thử
Yêu cầu hệ thống:

Đã cài đặt Java JDK 17 hoặc phiên bản mới hơn.

Sử dụng công cụ dòng lệnh (Terminal, Git Bash, hoặc PowerShell).

Các lệnh thực hiện:

Di chuyển vào thư mục dự án:

Bash
cd unit-test
Build dự án:

Bash
./gradlew build
Chạy Unit Test:

Bash
./gradlew test
2.4. Kết quả kiểm thử
Tất cả các ca kiểm thử (Test Cases) đã được thực hiện thành công 100%.

Các trường hợp đã kiểm thử:

Trường hợp bình thường: Danh sách bao gồm các điểm hợp lệ xen kẽ điểm không hợp lệ.

Trường hợp biên: Danh sách trống, danh sách chỉ chứa giá trị 0 hoặc giá trị 10.

Trường hợp ngoại lệ: Danh sách chứa toàn bộ điểm sai (điểm âm hoặc điểm > 10).

Lưu ý: Báo cáo chi tiết dưới dạng HTML (HTML Report) có thể xem tại đường dẫn:

unit-test/app/build/reports/tests/test/index.html

3. Quy trình quản lý Issue
Dự án áp dụng quy trình làm việc chuyên nghiệp trên GitHub:

Tạo Issue: Mỗi đầu mục công việc đều được quản lý bằng một Issue riêng biệt.

Liên kết Commit: Thực hiện Commit kèm theo mã số Issue (ví dụ: #1, #2) để truy vết mã nguồn.

Tự động hóa: Sử dụng từ khóa closes #index để tự động đóng Issue khi mã nguồn được cập nhật.