function formatProductName(productName) {
  // Prepare product names converted to strings that can be used in data test ids
  return productName
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .toLowerCase();
}

export { formatProductName };