import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Fee from './fee';

class FeeList extends Component {
    render() {
        if (this.props.allFeesQuery && this.props.allFeesQuery.loading) {
            return <div>Loading fees ...</div>
        }
        if (this.props.allFeesQuery && this.props.allFeesQuery.error) {
            return <div>Error loading fees from server!</div>
        }
        
        const FeesToRender = this.props.allFeesQuery.fees.edges
        FeesToRender.map(fee => (
            console.log(fee.node.amount),
            console.log(fee.node.grades.edges[0].node.name)
        ))

        return (
            <div>                    
                { FeesToRender.map(fee => (
                    <Fee key={ fee.node.id } fee={ fee.node }/>
                )) }
            </div>
        )
    }
}

const ALL_FEES_QUERY = gql`
query allFeesQuery{
  fees {
    edges {
      node {
        id
        year
        amount
        createdAt
        grades {
          edges {
            node {
              name
              stream
            }
          }
        }
      }
    }
  }
}`

export default graphql(ALL_FEES_QUERY, { name: 'allFeesQuery' }) (FeeList)