import { expect } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.itemName = this.page.locator('[data-test="inventory-item-name"]');
    this.finishButton = this.page.locator('[data-test="finish"]');
  }

  async verifyProductInCart(productName){
    await expect(this.itemName.filter({hasText: productName})).toBeVisible();
  }

  async clickFinish() {
    await this.finishButton.click();
  }
};
