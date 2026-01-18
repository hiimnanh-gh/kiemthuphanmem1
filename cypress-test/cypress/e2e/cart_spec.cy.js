describe("Cart and Checkout Test", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  it("Should add a product to the cart", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".shopping_cart_badge").should("have.text", "1"); // Kịch bản 3
  });

  it("Should sort products by price low to high", () => {
    cy.get(".product_sort_container").select("lohi");
    cy.get(".inventory_item_price").first().should("have.text", "$7.99"); // Kịch bản 4
  });

  it("Should remove a product from the cart", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click(); // Thêm vào
    cy.get(".btn_inventory").contains("Remove").click(); // Nhấn nút Remove
    cy.get(".shopping_cart_badge").should("not.exist"); // Xác minh giỏ hàng trống
  });

  it("Should complete the checkout process", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type("John"); // Điền thông tin
    cy.get("#last-name").type("Doe");
    cy.get("#postal-code").type("12345");
    cy.get("#continue").click();
    cy.url().should("include", "/checkout-step-two.html"); // Xác minh thanh toán
  });
});
