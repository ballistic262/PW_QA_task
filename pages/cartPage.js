const { expect } = require('@playwright/test');
const { verifyItemsVisible } = require('../utils');
const { formatProductName } = require('../helpers');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.inventoryItem = page.locator('[data-test="inventory-item"]');
  }

  async removeItemFromCart(productName) {
    const formattedProductName = formatProductName(productName);
    return this.page.locator(`button[data-test="remove-${formattedProductName}"]`);
  }

  async removeFromCart(productName) {
    const removeFromCartButton = await this.removeItemFromCart(productName);
    await removeFromCartButton.click();
  }

  async verifyAddedItems(){
    await expect(this.inventoryItem).toBeVisible();
  }

  async verifyItemsVisible(...itemNames) {
    await verifyItemsVisible(this.page, ...itemNames);
  }
  
  async goToCheckout() {
    await this.checkoutButton.click();
}};
