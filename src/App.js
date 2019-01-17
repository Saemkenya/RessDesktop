import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./apolloClient";
import TokenForm from "./TokenForm";
import SchoolParents from "./SchoolParents";

class App extends Component {
  state = {
    token: null
  };

  componentDidMount() {
    this.setState({ token: sessionStorage.getItem("token") });
  }

  setToken = token => {
    sessionStorage.setItem("token", token);
    this.setState({ token });
  };

  render() {
    const { token } = this.state;

    return (
      <ApolloProvider client={apolloClient}>
        <h1>School Parents</h1>
        {token ? <SchoolParents /> : <TokenForm setToken={this.setToken} />}
      </ApolloProvider>
    );
  }
}

export default App;
