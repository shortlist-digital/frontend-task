import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pjg9t4mlk1.execute-api.eu-west-1.amazonaws.com/staging/graphql",
  cache: new InMemoryCache(),
});

export default client;
