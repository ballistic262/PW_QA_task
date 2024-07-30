// @ts-check
const { test } = require('@playwright/test');
import {
  LoginPage,
  ProductsPage,
  CartPage,
  CheckoutInformationPage,
  CheckoutOverviewPage,
  CheckoutCompletePage,
  BasePage
} from '../pages';
import { standardUser } from '../test_data/users.json';
import { product1, product2, product3 } from '../test_data/products.json';

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    //Login to a page
    await loginPage.goto();
    await loginPage.loginUser(standardUser);
  });

  test.afterEach(async ({ page }) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);

    //Verify checkout success
    await checkoutCompletePage.verifyOrderSuccess();
  });

  test('Make an order with a single product', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const basePage = new BasePage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    //Add product to a cart
    await productsPage.addProductToCart(product1.name)
    await basePage.verifyBadgeCount("1")

    await basePage.openCart()
    await cartPage.verifyProductInCart(product1.name)

    //Checkout with selected product
    await cartPage.clickCheckout();

    await checkoutInformationPage.fillInformationData(standardUser.firstName, standardUser.lastName, standardUser.postalCode)
    await checkoutInformationPage.clickContinue();

    await checkoutOverviewPage.verifyProductInCart(product1.name)
    await checkoutOverviewPage.clickFinish();

  })
  test('Make an order with a multiple products', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const basePage = new BasePage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    //Add three products to a cart
    await productsPage.addProductToCart([product1.name, product2.name, product3.name]);
    await basePage.verifyBadgeCount("3");

    await basePage.openCart()
    await cartPage.verifyProductInCart(product1.name);
    await cartPage.verifyProductInCart(product2.name);
    await cartPage.verifyProductInCart(product3.name);

    //Remove one product from a cart
    await cartPage.removeProductFromCart(product2.name);
    await basePage.verifyBadgeCount("2");
    await cartPage.verifyProductInCart(product1.name);
    await cartPage.verifyProductInCart(product2.name, true);
    await cartPage.verifyProductInCart(product3.name);

    //Checkout with selected products
    await cartPage.clickCheckout();

    await checkoutInformationPage.fillInformationData(standardUser.firstName, standardUser.lastName, standardUser.postalCode)
    await checkoutInformationPage.clickContinue();

    await checkoutOverviewPage.verifyProductInCart(product1.name)
    await checkoutOverviewPage.clickFinish();

  })

});
