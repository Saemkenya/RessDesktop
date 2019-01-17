import React from "react";
import PropTypes from "prop-types";
import { Input } from "@progress/kendo-react-inputs";

export default class SignInForm extends React.Component {
  static propTypes = {
    startSignIn: PropTypes.func.isRequired
  };

  handleSignIn = event => {
    event.preventDefault();
    const { startSignIn } = this.props;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    if (password) {
      startSignIn(email, password);
    }
  };

  render() {
    return (
      <div>
      <h3>Sign In</h3>
      <form onSubmit={this.handleSignIn}>
        <Input
          name="email"
          placeholder="Email ..."
          ref={input => {
            this.emailInput = input;
          }}
        /><br/>
        <Input
          name="password"
          placeholder="Password ..."
          ref={input => {
            this.passwordInput = input;
          }}
        /><br />
        <button type="submit" onClick={this.handleSignIn}>Sign In</button>
      </form>
      </div>
    );
  }
}
