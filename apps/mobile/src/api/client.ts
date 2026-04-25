import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { API_URL } from '../config/env';

const httpLink = createHttpLink({
  uri: API_URL,
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
