export class CheckoutInformationPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = this.page.locator('[data-test="firstName"]');
    this.lastNameInput = this.page.locator('[data-test="lastName"]');
    this.postalCodeInput = this.page.locator('[data-test="postalCode"]');
    this.continueButton = this.page.locator('[data-test="continue"]');
  }

  async typeFirstName(firstName) {
    await this.firstNameInput.type(firstName);
  }

  async typeLastName(lastName) {
    await this.lastNameInput.type(lastName);
  }

  async typePostalCode(postalCode) {
    await this.postalCodeInput.type(postalCode);
  }

  async fillInformationData(firstName, lastName, postalCode) {
    await this.typeFirstName(firstName);
    await this.typeLastName(lastName);
    await this.typePostalCode(postalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }
};
