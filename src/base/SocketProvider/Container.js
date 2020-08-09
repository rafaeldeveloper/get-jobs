import { useState } from 'react';
import { split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';


export default () => {




  const [httpLink] = useState(
    createHttpLink({
      uri: 'https://boiling-anchorage-64181.herokuapp.com/graphql',
      headers: {
        "authType": "no-auth",
      }
    })
  );

  const [link] = useState(
    split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition'
        );
      },
      httpLink,
      httpLink,
    )
  );

  const [apolloClient] = useState(
    new ApolloClient({
      link,
      cache: new InMemoryCache()
    })
  );


  return apolloClient;
};