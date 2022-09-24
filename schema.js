import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    hello: String
    year: Int
    age: Float
    isCool: Boolean
    family: [String!]!
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    deleteCategory(input: DeleteProductInput!): Boolean!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean
    category: Category
    reviews: [Review!]
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type AddCategory {
    id: String!
    name: String!
  }

  type Review {
    id: ID!
    date: String!
    title: String
    comment: String
    rating: Int
    productId: ID!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  input DeleteProductInput {
    categoryId: ID!
  }
`;
