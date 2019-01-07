import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
import ApolloClient, { ApolloLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom';
import { onError } from 'apollo-link-error';
// import { RetryLink } from "apollo-link-retry";

window.onload = function(){
/*
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      console.log("Graphql error in RESS server instance");
    }
    if (networkErrors) {
      console.log("Network error in RESS server instance");
    }
  });

  const retryLink = new RetryLink({
    max: 10,
    delay: 5000,
    interval: (delay, count) => (count > 5 ? 10000 : delay)
  });
*/
  // const link = ApolloLink.from(errorLink); //retryLink, 

  const client = new ApolloClient({
    // link,
    uri: 'http://127.0.0.1:18700/ress'
  })

  ReactDOM.render(
    <ApolloProvider client={ client }>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ApolloProvider>
    , document.getElementById('app')
    );
    // registerServiceWorker()
}
