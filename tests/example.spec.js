// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';
import { standardUser } from '../test_data/users.json';
import { CheckoutPage } from '../pages/checkoutPage';


test('Make an order with a product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.loginUser(standardUser);
  await productPage.addToCart('Sauce Labs Backpack');
  await productPage.openCart();
  await cartPage.goToCheckout();
  await expect(cartPage.inventoryItem).toBeVisible;
  await checkoutPage.fillForm();
  await checkoutPage.clickContinue();
  
});
