const { expect } = require('@playwright/test');
const { formatProductName } = require('../helpers');

exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
  }

  async addItemToCart(productName) {
    const formattedProductName = formatProductName(productName);
    return this.page.locator(`button[data-test="add-to-cart-${formattedProductName}"]`);
  }

  async addToCart(productName) {
    const addToCartButton = await this.addItemToCart(productName);
    await addToCartButton.click();
  }

  async openCart() {
    await this.cartButton.click();
  }
};
