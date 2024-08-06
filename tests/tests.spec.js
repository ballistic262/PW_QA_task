const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductPage } = require('../pages/productPage');
const { CartPage } = require('../pages/cartPage');
const { standardUser } = require('../test_data/users.json');
const { CheckoutPage } = require('../pages/checkoutPage');
const { ConfirmationPage } = require('../pages/confirmationPage');
const { CompletionPage } = require('../pages/completionPage');

const sauceLabsBikeLight = "Sauce Labs Bike Light";
const sauceLabsBackpack = "Sauce Labs Backpack";
const sauceLabsFleeceJacket = "Sauce Labs Fleece Jacket";

test('Make an order with a product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);
  const completionPage = new CompletionPage(page);


  await loginPage.goto();
  await loginPage.loginUser(standardUser);

  await productPage.addToCart(sauceLabsBikeLight);
  await productPage.openCart();

  await cartPage.goToCheckout();
  await expect(cartPage.inventoryItem).toBeVisible;

  await checkoutPage.fillForm();
  await checkoutPage.clickContinue();
  
  await confirmationPage.verifyItemsVisible(sauceLabsBikeLight);
  await confirmationPage.clickFinish();

  await completionPage.checkCompletion();
  
});

test('Edit cart and make an order with 2 products', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);
  const completionPage = new CompletionPage(page);


  await loginPage.goto();
  await loginPage.loginUser(standardUser);

  await productPage.addToCart(sauceLabsBikeLight, sauceLabsBackpack, sauceLabsFleeceJacket);
  await productPage.openCart();

  await cartPage.verifyItemsVisible(sauceLabsBikeLight, sauceLabsBackpack, sauceLabsFleeceJacket);
  await cartPage.removeFromCart(sauceLabsFleeceJacket);
  await cartPage.goToCheckout();

  await checkoutPage.fillForm();
  await checkoutPage.clickContinue();

  await confirmationPage.verifyItemsVisible(sauceLabsBackpack, sauceLabsBikeLight);
  await confirmationPage.clickFinish();
  
  await completionPage.checkCompletion();
  
});
