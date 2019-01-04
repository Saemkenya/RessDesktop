import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom';

window.onload = function(){

  const client = new ApolloClient({
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
