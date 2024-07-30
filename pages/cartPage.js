import { expect } from '@playwright/test';
import { formatProductName } from '../utils/stringHelpers';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.itemRow = this.page.locator('[data-test="inventory-item"]');
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  async verifyProductInCart(productName, notDisplayed = false, quantity = '1') {
    //Verify existence of a given product in cart, by default checking quantity=1 and product visibility=true
    const filteredLocator = this.itemRow
      .filter({ hasText: productName })
      .filter({ has: this.page.locator('[data-test="item-quantity"]', { hasText: quantity }) })
    if (notDisplayed) {
      await expect(filteredLocator).not.toBeVisible()
    }
    else {
      await expect(filteredLocator).toBeVisible()
    }
  }

  generateRemoveFromCartLocator(productNameId) {
    return this.page.locator(`[data-test="remove-${productNameId}"]`);
  }

  async removeProductFromCart(productName) {
    const productNameId = formatProductName(productName)
    await this.generateRemoveFromCartLocator(productNameId).click();
  }

  async clickCheckout() {
    this.checkoutButton.click();
  }
}
