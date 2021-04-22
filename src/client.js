import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const ENDPOINT = 'https://api.github.com/graphql';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const httpLink = createHttpLink({
  uri: ENDPOINT,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${GITHUB_TOKEN}`,
    }
  }
});

// create apollo client
export const client = new ApolloClient({
   link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
