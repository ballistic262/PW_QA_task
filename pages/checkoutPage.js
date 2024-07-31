const { expect } = require('@playwright/test');
const { getRandomFirstName, getRandomLastName, getRandomPostalCode} = require('../helpers.js');

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]')
    this.continueButton = page.locator('[data-test="continue"]');
  }
  
  async fillForm() {
    const firstName = getRandomFirstName();
    const lastName = getRandomLastName();
    const postalCode = getRandomPostalCode(); 

    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    }
  async clickContinue() {
    await this.continueButton.click();
  }  
};
