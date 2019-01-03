import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CraeteUser extends Component {
    constructor () {
        super()
        this.state = {
        salute : '',
        name : '',
        email : '',
        password : '',
        }
        this._createUser = this._createUser.bind(this);
        
    }

    render() {
        return(
            <div>
                <article className="pa4 black-80">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Create New User</label>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-transparent w-100 measure" 
                                type="text" 
                                name="salute"  
                                id="user-salute" 
                                value={ this.state.salute }
                                placeholder="Salute ..."
                                onChange={ (e) => this.setState({
                                    salute: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-transparent w-100 measure" 
                                type="text" 
                                name="name"  
                                id="full-names" 
                                value={ this.state.name }
                                placeholder="Full Names ..."
                                onChange={ (e) => this.setState({
                                    name: e.target.value
                                }) }/>
                        </div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-transparent w-100 measure" 
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
                                className="b pa2 input-reset ba bg-transparent w-100 measure" 
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
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                                type="submit" 
                                value="Save User" 
                                onClick={ async () => this._createUser() }/></div>
                    </article>
            </div>
        )
    }
    _createUser() {
        var { salute, name } = this.state;
        this.props.createUserMutation({
            variables: {
                salute, 
                name,
            }
        })
    }
}

const CREATE_USER_MUTATION = gql`
    mutation CreateUserMutation(
        $salute:String!,
        $name: String!
    ){
    addUser(
        salute: $salute,
        name: $name,
    ){
        id
        salute
        name
    }
    }`

export default graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }) (CraeteUser)