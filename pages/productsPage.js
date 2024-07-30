import { formatProductName } from '../utils/stringHelpers';

export class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  generateAddToCartLocator(productNameId) {
    return this.page.locator(`[data-test="add-to-cart-${productNameId}"]`);
  }

  async addProductToCart(productNames) {
    //Add one or multiple (if array is provided) products to a cart
    const products = Array.isArray(productNames) ? productNames : [productNames];
    for (const productName of products) {
      const productNameId = formatProductName(productName)
      await this.generateAddToCartLocator(productNameId).click();
    }
  }

}
