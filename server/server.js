import express from "express";
import graphqlHTTP from "express-graphql";
import root from "./graphql/root";
import schema from "./graphql/schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3001);

console.log("Running a GraphQL API server at localhost:3001/graphql");
