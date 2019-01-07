import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import User from './user';
import Dept from './dept';

class DeptList extends Component {
    render() {
        if (this.props.allDeptsQuery && this.props.allDeptsQuery.loading) {
            return <div>Loading departments ...</div>
        }
        if (this.props.allDeptsQuery && this.props.allDeptsQuery.error) {
            return <div>Error loading departments from server!</div>
        }
        
        const DeptsToRender = this.props.allDeptsQuery.depts.edges
        DeptsToRender.map(dept => (
            console.log(dept.node.id),
            console.log(dept.node.name)
        ))

        return (
            <div>                    
                { DeptsToRender.map(dept => (
                    <Dept key={ dept.node.id } dept={ dept.node }/>
                )) }
            </div>
        )
    }
}

const ALL_DEPTS_QUERY = gql`
query allDepts{
  depts {
    edges {
      node {
        id
        name
      }
    }
  }
}`

export default graphql(ALL_DEPTS_QUERY, { name: 'allDeptsQuery' }) (DeptList)