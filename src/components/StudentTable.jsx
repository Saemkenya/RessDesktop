import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const SCHOOL_STUDENTS_QUERY = gql`
  query schoolStudent($email: String!) {
    school(email: $email) {
      id
      students {
        edges {
          node {
            name
            nickName
            nemisNo
            nhifStatus
            bCertNo
          }
        }
      }
    }
  }
`

export default class StudentTable extends React.Component {
  render () {
    return (
      <Fragment>
        <div>
          <span>Students</span>
          <Link to='/newStudent' className='f4 fw6 db white link hover-red'>
            Add New Student{' '}
          </Link>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Nemis ID</th>
                <th>Has NHIF</th>
                <th>B-Cert Number</th>
                <th>Nick Name</th>
              </tr>
            </thead>
            <tbody>
              <Query query={SCHOOL_STUDENTS_QUERY} variables={{ email: 'silverbull@187.guru' }}>
                {({ data, loading }) => {
                  if (loading) {
                    return <span>Loading...</span>
                  }
                  return data.school.students.edges.map(node => (
                    <tr>
                      <td>{node.node.name}</td>
                      <td>{node.node.nemisNo}</td>
                      <td>{String(node.node.nhifStatus)}</td>
                      <td>{node.node.bCertNo}</td>
                      <td>{node.node.nickName}</td>
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
