import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const SCHOOL_FEES_QUERY = gql`
  query schoolFees($email: String!) {
    school(email: $email) {
      id
      fees {
        edges {
          node {
            year
            amount
            semester
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
    }
  }
`

export default class FeeTable extends React.Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          <Query query={SCHOOL_FEES_QUERY} variables={{ email: 'silverbull@187.guru' }}>
            {({ data, loading }) => {
              if (loading) {
                return <span>Loading...</span>
              }
              // console.log(data)
              return data.school.fees.edges.map(node => (
                <tr>
                  <td>{node.node.year}</td>
                  <td>{node.node.amount}</td>
                  <td>{node.node.semester}</td>
                </tr>
              ))
            }}
          </Query>
        </tbody>
      </table>
    )
  }
}
