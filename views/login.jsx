import React, { Component } from 'react'

export default class UserLogin extends Component {
    constructor () {
        super()
        this.state = {
        email:            '',
        password:         '',
        }
    }

    render() {
        return(
            <div>
                <article className="pa4 black-80">
                    <label className="db fw4 lh-copy white f6" htmlFor="new-user-title">Login To RESS</label>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>

                        <div className="mt3">
                            <input 
                                className="b pa2 input-reset ba bg-white w-100 measure" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                value={ this.state.email }
                                placeholder="Email address ..."
                                onChange={ (e) => this.setState({
                                    email: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="b pa2 input-reset ba bg-white w-100 measure" 
                                type="password" 
                                name="password"  
                                id="user-password" 
                                value={ this.state.password }
                                placeholder="Password ..."
                                onChange={ (e) => this.setState({
                                    password: e.target.value
                                }) }/>
                        </div>

                        </fieldset>
                        <div className="mt3">
                            <input 
                                className="ph3 pv2 input-reset ba b--black bg-white grow pointer f6" 
                                type="submit" 
                                value="Sign In" 
                                // onClick={ console.log(this.state) }
                                />
                        </div>
                    </article>
            </div>
        )
    }
}