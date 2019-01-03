import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CraeteUser extends Component {

    state = {
        salute: '',
        name: ''
    }

    render() {
        return(
            <div>
                <div className="flex flex-column mt3">
                    <input
                        value={ this.state.salute } 
                        type="text" 
                        className="mb2"
                        onChange={ (e) => this.setState({
                            salute: e.target.value
                        }) }
                        placeholder='New user salute'/>

                    <input
                        value={ this.state.name } 
                        type="text" 
                        className="mb2"
                        onChange={ (e) => this.setState({
                            name: e.target.value
                        }) }
                        placeholder='Full names of new user'/>
                </div>
                <button 
                    onClick={ () => this._createUser() }>
                    Save User
                </button>
            </div>
        )
    }
    _createUser = async () => {
        const { salute, name } = this.state
        await this.props.createUserMutation({
            variables: {
                salute, 
                name
            }
        })
    }
}

const CREATE_USER_MUTATION = gql`
    mutation CreateUserMutation(
        $salute:String!,
        $name: String!
    )
    addUser(
        salute: $salute,
        name: $name,
    ){
        id
        salute
        name
    }`

export default graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }) (CraeteUser)