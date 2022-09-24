export const Query = {
  hello: () => {
    return "World from the other side";
  },
  year: () => {
    return 2022;
  },
  age: () => {
    return 26.5;
  },
  isCool: () => {
    return true;
  },
  family: () => {
    return ["Arjundas", "Hitesh", "Sunita", "Nandlal"];
  },
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;
    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
    }
    return filteredProducts;
  },
  product: (parent, { id: productId }, { products }) => {
    return products.find((product) => product.id === productId);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id: categoryId }, { categories }) => {
    return categories.find((category) => category.id === categoryId);
  },
  reviews: (parent, args, { reviews }) => {
    return reviews;
  },
};
