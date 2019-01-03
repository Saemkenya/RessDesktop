import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

window.onload = function(){

  const client = new ApolloClient({
    uri: 'http://127.0.0.1:18700/ress'
  })

  ReactDOM.render(
    <ApolloProvider client={ client }>
      <Main />
    </ApolloProvider>
    , document.getElementById('app')
    );
    // registerServiceWorker()
}
