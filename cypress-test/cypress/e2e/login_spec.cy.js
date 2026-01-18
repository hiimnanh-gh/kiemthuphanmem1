describe("Login Test", () => {
  // beforeEach chạy trước mỗi bài test để đảm bảo môi trường sạch
  beforeEach(() => {
    // Xóa sạch session và cookies để tránh bị redirect nhầm trang
    cy.clearCookies();
    cy.clearLocalStorage();
    // Luôn truy cập trang chủ trước khi làm bất cứ việc gì
    cy.visit("https://www.saucedemo.com");
  });

  // Kịch bản 1: Đăng nhập thành công
  it("Should login successfully with valid credentials", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    // Xác minh đã chuyển đến trang kho hàng
    cy.url().should("include", "/inventory.html");
  });

  // Kịch bản 2: Đăng nhập thất bại
  it("Should show error message with invalid credentials", () => {
    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("wrong_password");
    cy.get("#login-button").click();

    // Kiểm tra container thông báo lỗi có chứa nội dung đúng yêu cầu
    cy.get(".error-message-container").should(
      "contain",
      "Username and password do not match",
    );
  });
});
