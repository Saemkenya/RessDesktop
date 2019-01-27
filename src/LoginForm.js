import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@progress/kendo-react-inputs'
import SignInForm from './SignInForm'

export default class LoginForm extends React.Component {
  state = {
    email: null,
    password: null
  }

  static propTypes = {
    setToken: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.setState({ email: sessionStorage.getItem('email') })
    this.setState({ password: sessionStorage.getItem('password') })
    sessionStorage.setItem('token', null)
  }

  startLogin = function (email, password) {
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('password', password)
    this.setState({ email })
    this.setState({ password })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { setToken } = this.props
    const token = this.tokenInput.value
    if (token) {
      setToken(token)
    }
  }

  render () {
    return (
      <div>
        <h3>Present ress server token</h3>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='token'
            placeholder='Enter ress_token from server...'
            ref={input => {
              this.tokenInput = input
            }}
          />
        </form>
        <div>
          <SignInForm startLogin={this.startLogin} />
        </div>
      </div>
    )
  }
}
