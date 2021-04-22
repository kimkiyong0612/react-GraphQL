import { client } from "./client";
import { ApolloProvider } from "react-apollo";
import { gql } from '@apollo/client';

client
  .query({
    query: gql`
      query GetLicenses {
        licenses {
          body
          description
        }
      }
    `
  })
  .then(result => console.log(result));

function App() {
  return (
    <div className="App">
      <div>hi</div>

      <ApolloProvider client={client}>
        <h1>Hello GraphQL</h1>
      </ApolloProvider>
    </div>
  );
}

export default App;
