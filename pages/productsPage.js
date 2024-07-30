import { formatProductName } from '../utils/stringHelpers';

export class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  generateAddToCartLocator(productNameId){
    return this.page.locator(`[data-test="add-to-cart-${productNameId}"]`);
  }
  
  async addProductToCart(productName) {
    const productNameId = formatProductName(productName)
    await this.generateAddToCartLocator(productNameId).click();
  }

}
