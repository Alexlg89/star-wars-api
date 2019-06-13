import express from "express";
import graphql from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const app = express();

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/graphql",
  graphql({
    graphiql: true,
    schema
  })
);

app.listen(3001);

console.log("Running a GraphQL API server at localhost:3001/graphql");
