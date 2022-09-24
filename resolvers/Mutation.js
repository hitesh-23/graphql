import { v4 as uuid } from "uuid";

export const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, { input }, { products }) => {
    const { name, description, quantity, price, categoryId, onSale } = input;
    const newProduct = {
      id: uuid(),
      name,
      price,
      quantity,
      description,
      onSale,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },
  deleteCategory: (parent, { input }, { categories }) => {
    const { categoryId } = input;

    categories.filter((cat) => cat.id !== categoryId);
    return true;
  },
};
