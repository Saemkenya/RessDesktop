import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import User from './user';

class UserList extends Component {
    render() {
        if (this.props.allUsersQuery && this.props.allUsersQuery.loading) {
            return <div>Loading users ...</div>
        }
        if (this.props.allUsersQuery && this.props.allUsersQuery.error) {
            return <div>Error loading users from server!</div>
        }
        
        const UsersToRender = this.props.allUsersQuery.users.edges
        UsersToRender.map(user => (
            console.log(user.node.id),
            console.log(user.node.salute),
            console.log(user.node.name)
        ))

        return (
            <div>
                <header className="sans-serif">
                <div className="bg-black-80 pb5 pb6-m pb7-l"> 
                    <div className="tc-l mt4 mt5-m mt6-l ph3">
                        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Guardians</h1>
                        <h2 className="fw1 f3 white-80 mt3 mb4">A list of all parents</h2>
                        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">PP1 and PP2 only</a>
                        <span className="dib v-mid ph3 white-70 mb3">or</span>
                        <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Grade One to Three</a>
                    </div>
                    
                    { UsersToRender.map(user => (
                        <User key={ user.node.id } user={ user.node }/>
                    )) }
                        </div>
                </header>
                </div>
        )
    }
}

const ALL_USERS_QUERY = gql`
query allUsers{
  users {
    edges {
      node {
        id
        salute
        name
        IDno
        NHIFno
        cell
        email
        AddrPoBox
        AddrPostalCode
        AddrPostalCode
        AddrTown
        AddrCounty
        AddrNationality
      }
    }
  }
}`

export default graphql(ALL_USERS_QUERY, { name: 'allUsersQuery' }) (UserList)