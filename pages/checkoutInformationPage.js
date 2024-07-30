export class CheckoutInformationPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = this.page.locator('[data-test="firstName"]');
    this.lastNameInput = this.page.locator('[data-test="lastName"]');
    this.postalCodeInput = this.page.locator('[data-test="postalCode"]');
    this.continueButton = this.page.locator('[data-test="continue"]');
  }

  async fillInformationData(firstName, lastName, postalCode){
    await this.firstNameInput.type(firstName);
    await this.lastNameInput.type(lastName);
    await this.postalCodeInput.type(postalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }
  
}
