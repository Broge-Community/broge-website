// @src/apollo.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

export default apolloClient;
