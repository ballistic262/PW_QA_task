import { expect } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.successMessage = this.page.locator('[data-test="complete-header"]');
  }

  async verifyOrderSuccess(){
    await expect(this.successMessage).toBeVisible();
  }
};
