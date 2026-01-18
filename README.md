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

Kết quả: Đạt điểm số cao trong thử thách phân biệt thiết kế.

<img width="1886" height="858" alt="image" src="https://github.com/user-attachments/assets/51364877-8eae-433d-bc7f-53f8ba219008" />

2. Kiểm thử Đơn vị với JUnit 5 (Unit Testing)
Chủ đề: Phân tích dữ liệu điểm số học sinh (Student Grade Analyzer).

2.1. Giới thiệu bài tập
Dự án thực hiện các chức năng phân tích danh sách điểm số của học sinh và sử dụng thư viện JUnit 5 để đảm bảo tính chính xác của thuật toán.

Các chức năng chính:

countExcellentStudents: Đếm số lượng học sinh có điểm Giỏi (từ 8.0 trở lên).

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

Bash
cd unit-test
./gradlew build
./gradlew test

2.4. Kết quả kiểm thử
Tất cả các ca kiểm thử (Test Cases) đã được thực hiện thành công 100%.

Các trường hợp đã kiểm thử:

Trường hợp bình thường: Danh sách bao gồm các điểm hợp lệ xen kẽ điểm không hợp lệ.

Trường hợp biên: Danh sách trống, danh sách chỉ chứa giá trị 0 hoặc giá trị 10.

Trường hợp ngoại lệ: Danh sách chứa toàn bộ điểm sai (điểm âm hoặc điểm > 10).

Lưu ý: Báo cáo chi tiết dưới dạng HTML (HTML Report) có tại: unit-test/app/build/reports/tests/test/index.html

🧪 Tuần 2: Kiểm thử Tự động E2E với Cypress
1. Giới thiệu bài tập
Thực hiện kịch bản kiểm thử tự động End-to-End (E2E) trên trang thương mại điện tử mẫu Saucedemo.

2. Các kịch bản kiểm thử đã thực hiện (Specs)
Dự án triển khai tại thư mục ./cypress-test với các kịch bản chính:

Đăng nhập (login_spec.cy.js): Kiểm tra đăng nhập thành công với tài khoản hợp lệ (standard_user) và hiển thị thông báo lỗi khi thông tin không hợp lệ.

Giỏ hàng (cart_spec.cy.js):

Thêm sản phẩm vào giỏ hàng và xác minh badge hiển thị số lượng sản phẩm.

Sử dụng bộ lọc sắp xếp sản phẩm theo giá (Price low to high).

Xóa sản phẩm: Kiểm tra chức năng nút Remove để xác minh giỏ hàng trở về 0.

Thanh toán (Checkout): Thực hiện đầy đủ luồng điền thông tin khách hàng (John Doe, 12345) và xác minh chuyển hướng thành công đến trang Overview (/checkout-step-two.html).

3. Hướng dẫn chạy kiểm thử
Yêu cầu: Đã cài đặt Node.js và Cypress trong thư mục cypress-test.

Lệnh thực hiện:

Bash
cd cypress-test
npx cypress open
4. Kết quả kiểm thử
🛠️ Quy trình quản lý Issue & Commit
<img width="1918" height="837" alt="image" src="https://github.com/user-attachments/assets/5d7ccdfe-4c55-47a4-93d3-a6c9c2d203f0" />
<img width="1919" height="845" alt="image" src="https://github.com/user-attachments/assets/21513b0a-8858-42b8-bf4a-addf731f9200" />
<img width="1919" height="845" alt="image" src="https://github.com/user-attachments/assets/184638b4-f42a-4e4a-9fd3-d25bef9c4137" />

