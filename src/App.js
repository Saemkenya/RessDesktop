import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import apolloClient from './apolloClient'
// import School from './School'
import { BrowserRouter } from 'react-router-dom'
import SignIn from './SignInForm'
// import './App.css'
import './static/Style.css'
import CryptoJS from 'crypto-js'
import Main from './components/main'

class App extends Component {
  state = {
    token: null,
    email: '',
    password: '',

    response: null,
    salute: null,
    name: null,
    accRole: null,
    admRole: null,
    gdnRole: null,
    libRole: null,
    mngRole: null,
    tutRole: null,
    regRole: null
  }

  handleSignIn = event => {
    event.preventDefault()
    var creditString = `${this.state.email}:${this.state.password}`
    var credentials = CryptoJS.enc.Utf8.parse(creditString) // WordArray object
    var base64 = CryptoJS.enc.Base64.stringify(credentials)
    this.getUser(base64)
  }

  handlePasswordUpdate = password => {
    this.setState({
      password: password
    })
  }

  handleEmailUpdate = email => {
    this.setState({
      email: email
    })
  }

  componentDidMount () {
    this.setState({ token: sessionStorage.getItem('token') })
    this.setState({ name: sessionStorage.getItem('name') })
    this.setState({ response: sessionStorage.getItem('response') })
    this.setState({ accRole: sessionStorage.getItem('accRole') })
    this.setState({ admRole: sessionStorage.getItem('admRole') })
    this.setState({ gdnRole: sessionStorage.getItem('gdnRole') })
    this.setState({ libRole: sessionStorage.getItem('libRole') })
    this.setState({ mngRole: sessionStorage.getItem('mngRole') })
    this.setState({ tutRole: sessionStorage.getItem('tutRole') })
    this.setState({ regRole: sessionStorage.getItem('regRole') })
    this.setState({ email: sessionStorage.getItem('email') })
  }

  setToken = (token, name) => {
    sessionStorage.setItem(name, token)
    this.setState({ token })
  }

  removeToken = () => {
    sessionStorage.setItem('token', null)
    this.setState({ token: null })
  }
  getRoles = () => {
    let roles = this.state
    return roles.map(role => role.contains('true'))
  }

  rendeRoles = () => {
    const roles = {
      Accountant: this.state.accRole,
      Admin: this.state.admRole,
      Guardian: this.state.gdnRole,
      Librarian: this.state.libRole,
      Manager: this.state.mngRole,
      Tutor: this.state.tutRole,
      Registrar: this.state.regRole
    }

    let finalRoles = []
    let dumpRoles = []
    for (var key in roles) {
      var value = roles[key]

      value ? finalRoles.push(key) : dumpRoles.push(value)
    }
    return finalRoles
  }

  render () {
    const { token } = this.state
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
    )
  }

  getUser = basicBase64 => {
    const restartLogin = () => {
      this.setState = {
        token: null,
        email: '',
        password: '',

        response: null,
        salute: null,
        name: null,
        accRole: null,
        admRole: null,
        gdnRole: null,
        libRole: null,
        mngRole: null,
        tutRole: null,
        regRole: null
      }
    }
    restartLogin.bind(this)
    let myheaders = {
      Authorization: `Basic ${basicBase64}`,
      'Content-Type': 'application/json'
    }

    fetch('http://localhost:18700/auth', {
      method: 'POST',
      body: JSON.stringify(''),
      headers: myheaders
    })
      .then(
        function (response) {
          return response.body.getReader().read()
        },
        function (error) {
          alert(error.message + '\nAre you connected to the RESS servers?')
          restartLogin()
          return false
        }
      )
      .then(data => new TextDecoder('utf-8').decode(data.value))
      .then(newString => this.saveUserData(newString))
  }

  saveUserData = data => {
    let newData = data.slice(1, -1)
    let items = newData.replace('"roles":{', '')
    let items1 = items.replace('"user":[', '')
    let items2 = items1.replace('"ress_token":', '')
    let items3 = items2.replace(']', '')
    let items4 = items3.replace('}', '')
    let itemsArray = items4.split(',')
    this.updateState(itemsArray)
  }
  updateState = items => {
    this.setState({
      response: items[0].slice(1),
      email: items[1].slice(1, -1),
      salute: items[2].slice(1, -1),
      name: items[3].slice(1, -1),
      accRole: this.setRole(items[4]),
      admRole: this.setRole(items[5]),
      gdnRole: this.setRole(items[6]),
      libRole: this.setRole(items[7]),
      mngRole: this.setRole(items[8]),
      tutRole: this.setRole(items[10]),
      regRole: this.setRole(items[9]),
      token: items[11].slice(1, -1)
    })

    this.setToken(this.state.accRole, 'accRole')
    this.setToken(this.state.admRole, 'admRole')
    this.setToken(this.state.gdnRole, 'gdnRole')
    this.setToken(this.state.libRole, 'libRole')
    this.setToken(this.state.mngRole, 'mngRole')
    this.setToken(this.state.tutRole, 'tutRole')
    this.setToken(this.state.regRole, 'regRole')
    this.setToken(this.state.response, 'response')
    this.setToken(this.state.name, 'name')
    this.setToken(this.state.email, 'email')
    this.setToken(items[11].slice(1, -1), 'token')
  }
  setRole = roleString => {
    if (roleString.includes('true')) {
      return true
    }
    return false
  }
}

export default App
