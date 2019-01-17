import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./apolloClient";
import LoginForm from "./LoginForm";
import School from "./School";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    token: null,
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
      <BrowserRouter>
        {token ? <School /> : <LoginForm setToken={this.setToken} />}
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
