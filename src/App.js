import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./apolloClient";
// import School from './School'
import { BrowserRouter } from "react-router-dom";
import SignIn from "./SignInForm";
// import './App.css'
import "./static/Style.css";
import CryptoJS from "crypto-js";
import Main from "./components/main";

class App extends Component {
  state = {
    response: null,
    token: null,
    
    password: "",
    email: "",
    salute: null,
    name: null,
    school: null,

    accRole: null,
    admRole: null,
    gdnRole: null,
    libRole: null,
    mngRole: null,
    stkRole: null,
    supRole: null,
    tutRole: null,
  };

  handleSignIn = (event) => {
    event.preventDefault();
    var creditString = `${this.state.email}:${this.state.password}`;
    var credentials = CryptoJS.enc.Utf8.parse(creditString); // WordArray object
    var base64 = CryptoJS.enc.Base64.stringify(credentials);
    this.getUser(base64);
  };

  handlePasswordUpdate = (password) => {
    this.setState({
      password: password,
    });
  };

  handleEmailUpdate = (email) => {
    this.setState({
      email: email,
    });
  };

  componentDidMount() {
    this.setState({ response: sessionStorage.getItem("response") });
    this.setState({ token: sessionStorage.getItem("token") });

    this.setState({ salute: sessionStorage.getItem("salute") });
    this.setState({ name: sessionStorage.getItem("name") });
    this.setState({ email: sessionStorage.getItem("email") });
    this.setState({ school: sessionStorage.getItem("school") });

    this.setState({ accRole: sessionStorage.getItem("accRole") });
    this.setState({ admRole: sessionStorage.getItem("admRole") });
    this.setState({ gdnRole: sessionStorage.getItem("gdnRole") });
    this.setState({ libRole: sessionStorage.getItem("libRole") });
    this.setState({ mngRole: sessionStorage.getItem("mngRole") });
    this.setState({ stkRole: sessionStorage.getItem("stkRole") });
    this.setState({ supRole: sessionStorage.getItem("supRole") });
    this.setState({ tutRole: sessionStorage.getItem("tutRole") });
  }

  setToken = (token, name) => {
    sessionStorage.setItem(name, token);
    this.setState({ token });
  };

  removeToken = () => {
    sessionStorage.setItem("token", null);
    this.setState({ token: null });
  };
  getRoles = () => {
    let roles = this.state;
    return roles.map((role) => role.contains("true"));
  };

  rendeRoles = () => {
    const roles = {
      Accountant: this.state.accRole,
      Admin: this.state.admRole,
      Guardian: this.state.gdnRole,
      Librarian: this.state.libRole,
      Manager: this.state.mngRole,
      StoreKeeper: this.state.stkRole,
      Supplier: this.state.supRole,
      Tutor: this.state.tutRole,
    };

    let finalRoles = [];
    let dumpRoles = [];
    for (var key in roles) {
      var value = roles[key];

      value ? finalRoles.push(key) : dumpRoles.push(value);
    }
    return finalRoles;
  };

  render() {
    const { token } = this.state;
    // this.rendeRoles()
    return (
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          {token ? (
            <Main roles={this.rendeRoles()} email={this.state.name} />
          ) : (
            <SignIn
              onSignIn={this.handleSignIn}
              onToken={this.setToken}
              onSignOut={this.removeToken}
              onEmailUpdate={this.handleEmailUpdate}
              onPasswordUpdate={this.handlePasswordUpdate}
            />
          )}
        </BrowserRouter>
      </ApolloProvider>
    );
  }

  getUser = (basicBase64) => {
    const restartLogin = () => {
      this.setState = {
        response: null,
        token: null,
        
        password: "",
        email: "",
        salute: null,
        name: null,
        school: null,

        accRole: null,
        admRole: null,
        gdnRole: null,
        libRole: null,
        mngRole: null,
        stkRole: null,
        supRole: null,
        tutRole: null,
      };
    };
    restartLogin.bind(this);
    let myheaders = {
      Authorization: `Basic ${basicBase64}`,
      "Content-Type": "application/json",
    };

    fetch("http://localhost:18700/auth", {
      method: "POST",
      body: JSON.stringify(""),
      headers: myheaders,
    })
      .then(
        function(response) {
          return response.body.getReader().read();
        },
        function(error) {
          alert(error.message + "\nAre you connected to the RESS servers?");
          restartLogin();
          return false;
        }
      )
      .then((data) => new TextDecoder("utf-8").decode(data.value))
      .then((newString) => this.updateState(newString));
  };

  updateState = (data) => {
    let newData = JSON.parse(data);
    console.log(newData);
    this.setState({
      response: newData.code,
      token: newData.ress_token,

      salute: newData[1],
      name: newData[2],
      email: newData.user[0],
      school: newData.user[3],

      accRole: newData.roles.Accountant,
      admRole: newData.roles.Admin,
      gdnRole: newData.roles.Guardian,
      libRole: newData.roles.Librarian,
      mngRole: newData.roles.Manager,
      stkRole: newData.roles.StoreKeeper,
      supRole: newData.roles.Supplier,
      tutRole: newData.roles.Tutor,
    });

    this.setToken(this.state.response, "response");
    this.setToken(this.state.token, "token");

    this.setToken(this.state.salute, "salute")
    this.setToken(this.state.name, "name");
    this.setToken(this.state.email, "email");
    this.setToken(this.state.school, "school");

    this.setToken(this.state.accRole, "accRole");
    this.setToken(this.state.admRole, "admRole");
    this.setToken(this.state.gdnRole, "gdnRole");
    this.setToken(this.state.libRole, "libRole");
    this.setToken(this.state.mngRole, "mngRole");
    this.setToken(this.state.stkRole, "stkRole");
    this.setToken(this.state.supRole, "supRole");
    this.setToken(this.state.tutRole, "tutRole");
  };
  
}

export default App;
