import React from 'react'
import { Input } from '@progress/kendo-react-inputs'

class SignInForm extends React.Component {
  state = {
    email: '',
    emailError: false,
    password: '',
    passwordError: false
  }

  handleInputChange = (field, value) => {
    const newState = {
      ...this.state,
      [field]: value
    }
    this.setState(newState)
  }

  handleSubmit = () => {
    const { email, password } = this.state
    if (email.length === 0) {
      return this.setState({ emailError: true })
    }
    this.setState({ emailError: false })

    if (password.length === 0) {
      return this.setState({ passwordError: true })
    }
    this.setState({ passwordError: false })

    return this.props.screenProps.changeLoginState(true)
  }

  render () {
    const { emailError, passwordError } = this.state

    return (
      <div>
        <form onSubmit={this.handleSignIn}>
          <Input
            onChangeText={value => this.handleInputChange('email', value)}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            onError={emailError}
            name='email'
            placeholder='Email ...'
            ref={input => {
              this.emailInput = input
            }}
          />
          <br />
          <Input
            onChangeText={value => this.handleInputChange('password', value)}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
            onError={passwordError}
            name='password'
            placeholder='Password ...'
            ref={input => {
              this.passwordInput = input
            }}
          />
          <br />
          <button type='submit' onClick={this.handleSignIn}>
            Sign In
          </button>
        </form>
      </div>
      //   <Form>
      //     <Item error={emailError}>
      //       <Input
      //         placeholder="Email"
      //         onChangeText={value => this.handleInputChange('email', value)}
      //         keyboardType="email-address"
      //         autoCapitalize="none"
      //         autoCorrect={false}
      //       />
      //     </Item>
      //     <Item error={passwordError}>
      //       <Input
      //         placeholder="Password"
      //         onChangeText={value => this.handleInputChange('password', value)}
      //         autoCapitalize="none"
      //         autoCorrect={false}
      //         secureTextEntry
      //       />
      //     </Item>
      //   </Form>
      //   <Button full onPress={this.handleSubmit}>
      //     <Text>Sign In</Text>
      //   </Button>
      // </div>
      // </div>
    )
  }
}

export default SignInForm
/*
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
*/
