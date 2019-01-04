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
            console.log(user.node.salute),
            console.log(user.node.name)
        ))

        return (
            <div>                    
                { UsersToRender.map(user => (
                    <User key={ user.node.id } user={ user.node }/>
                )) }
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
        AddrTown
        AddrCounty
        AddrNationality
      }
    }
  }
}`

export default graphql(ALL_USERS_QUERY, { name: 'allUsersQuery' }) (UserList)