export const ALL_PRODUCTS_API_URL =
  "https://mtm6407-week13-p02m.onrender.com/api/products?populate=image";

export const SINGLE_PRODUCT_API_URL = (documentId) => {
  return `https://mtm6407-week13-p02m.onrender.com/api/products/${documentId}?populate=image`;
};
