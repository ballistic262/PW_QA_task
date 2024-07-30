const { expect } = require("@playwright/test");

exports.BasePage = class BasePage {
  constructor(page) {
    this.page = page;
    this.shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
    this.title = this.page.locator('[data-test="title"]');
  }

  async verifyBadgeCount(expectedCount) {
    //Verify badge on a cart icon indicates number of products added
    await expect(this.cartBadge).toHaveText(expectedCount)
  }

  async openCart() {
    await this.shoppingCart.click();
    await expect(this.title).toHaveText('Your Cart');
  }
};
