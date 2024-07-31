const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.inventoryItem = page.locator('[data-test="inventory-item"]');
  }
  
  async goToCheckout() {
    await this.checkoutButton.click();
}};
