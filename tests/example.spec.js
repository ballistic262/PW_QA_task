// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
import { ProductPage } from '../pages/productPage';
import { standardUser } from '../test_data/users.json';


test('Make an order with a product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goto();
  await loginPage.loginUser(standardUser);
  await productPage.addToCart('Sauce Labs Backpack');
  await productPage.addToCart('Sauce Labs Bike Light');
  await productPage.openCart();
});
