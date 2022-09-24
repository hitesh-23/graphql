import { ApolloServer } from "apollo-server";
import { Category } from "./resolvers/Category.js";
import { Product } from "./resolvers/Product.js";
import { Query } from "./resolvers/Query.js";
import { Mutation } from "./resolvers/Mutation.js";
import { typeDefs } from "./schema.js";
import { categories, products, reviews } from "./db.js";

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query,
    Product,
    Category,
  },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is listening at ${url}`);
});
