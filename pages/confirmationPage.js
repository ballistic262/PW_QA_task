const { verifyItemsVisible } = require('../utils');

exports.ConfirmationPage = class ConfirmationPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async verifyItemsVisible(...itemNames) {
    await verifyItemsVisible(this.page, ...itemNames);
  }

  async clickFinish() {
    await this.finishButton.click();
  }  
};