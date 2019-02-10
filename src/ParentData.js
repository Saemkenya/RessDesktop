import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Parent from './Parent'
import ParentPayment from './ParentPayment'

const SCHOOL_PARENTS_QUERY = gql`
  query SchoolParentsQuery($email: String!) {
    school(email: $email) {
      id
      users {
        edges {
          node {
            id
            createdAt
            students {
              edges {
                node {
                  name
                  nemisNo
                }
              }
            }
            payments {
              edges {
                node {
                  amount
                  date
                  balance
                  confirmed
                  account
                }
              }
            }
          }
        }
      }
    }
  }
`

export default class SchoolParents extends React.Component {
  render () {
    return (
      <div>
        <Query query={SCHOOL_PARENTS_QUERY} variables={{ email: 'silverbull@187.guru' }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>
            }
            return <ParentPayment data={data.school.users.edges} />
          }}
        </Query>
        <div className='dtc v-mid pl3'>
          <div className='f6 f5-ns fw6 lh-title white mv0'>Students Of This Parent</div>
        </div>

        <Query query={SCHOOL_PARENTS_QUERY} variables={{ email: 'silverbull@187.guru' }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>
            }
            return <Parent data={data.school.users.edges} />
          }}
        </Query>
      </div>
    )
  }
}
