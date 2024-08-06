const { expect } = require('@playwright/test');

exports.CompletionPage = class CompletionPage {
  constructor(page) {
    this.page = page;
    this.completeHeader = page.locator('[data-test="complete-header"]');
  }


  async checkCompletion() {
    await expect(this.completeHeader).toBeVisible();
  }  
};