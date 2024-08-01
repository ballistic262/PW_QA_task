const { expect } = require('@playwright/test');

// async function verifyItemVisible(page, itemName) {
//   const itemLocator = page.locator(`text=${itemName}`);
//   await expect(itemLocator).toBeVisible();
// }

async function verifyItemsVisible(page, ...itemNames) {
    for (const itemName of itemNames) {
      const itemLocator = page.locator(`text=${itemName}`);
      await expect(itemLocator).toBeVisible();
    }
  }

module.exports = { verifyItemsVisible };