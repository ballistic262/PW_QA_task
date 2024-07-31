const { expect } = require('@playwright/test');

exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('data-test="shopping-cart-link"');
  }

  // Function to get the "Add to cart" button locator by product name
  getAddToCartButtonLocator(productName) {
    const formattedProductName = productName.toLowerCase().replace(/\s+/g, '-');
    return this.page.locator(`button[data-test="add-to-cart-${formattedProductName}"]`);
  }

  async addToCart(productName) {
    const addToCartButton = this.getAddToCartButtonLocator(productName);
    await addToCartButton.click();
  }

  async openCart() {
    await this.addToCartButton.click();
}};
