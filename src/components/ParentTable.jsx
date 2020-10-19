import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'

const SCHOOL_PARENTS_QUERY = gql`
  query SchoolParentsQuery($email: String!) {
    school(email: $email) {
      id
      users {
        edges {
          node {
            id
            salute
            name
            cell
            IDno
            NHIFno
            email
          }
        }
      }
    }
  }
`

export default class ParentTable extends React.Component {
  render () {
    return (
      <Fragment>
        <div>
          <span>Parents</span>
          <Link to='/newParent' className='f4 fw6 db white link hover-red'>
            Add New Parent{' '}
          </Link>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Names</th>
                <th>Cell</th>
                <th>ID No.</th>
                <th>NHIF No.</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <Query query={SCHOOL_PARENTS_QUERY} variables={{ email: sessionStorage.getItem("school") }}>
                {({ data, loading }) => {
                  if (loading) {
                    return <span>Loading...</span>
                  }
                  return data.school.users.edges.map(node => (
                    <tr>
                      <td>
                        {node.node.salute} {node.node.name}
                      </td>
                      <td>{node.node.cell}</td>
                      <td>{node.node.IDno}</td>
                      <td>{node.node.NHIFno}</td>
                      <td>{node.node.email}</td>
                    </tr>
                  ))
                }}
              </Query>
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}
