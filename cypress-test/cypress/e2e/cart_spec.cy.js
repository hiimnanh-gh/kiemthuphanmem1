describe("Cart and Checkout Test", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  // Kịch bản 3: Thêm sản phẩm
  it("Should add a product to the cart", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });

  // Kịch bản 4: Sắp xếp giá
  it("Should sort products by price low to high", () => {
    cy.get(".product_sort_container").select("lohi");
    cy.get(".inventory_item_price").first().should("have.text", "$7.99");
  });

  // Yêu cầu thêm 1: Xóa sản phẩm
  it("Should remove a product from the cart", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click(); // Thêm vào trước
    cy.get(".btn_inventory").contains("Remove").click(); // Nhấn nút Remove
    cy.get(".shopping_cart_badge").should("not.exist"); // Badge biến mất
  });

  // Yêu cầu thêm 2: Quy trình thanh toán (Checkout)
  it("Should complete the checkout flow", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();

    // Điền thông tin khách hàng
    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#postal-code").type("12345");
    cy.get("#continue").click();

    // Xác minh đến trang xác nhận cuối cùng
    cy.url().should("include", "/checkout-step-two.html");
  });
});
