import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const SCHOOL_GRADES_QUERY = gql`
  query schoolGrades($email: String!) {
    school(email: $email) {
      id
      grades {
        edges {
          node {
            id
            name
            stream
            students {
              edges {
                node {
                  name
                  nemisNo
                }
              }
            }
          }
        }
      }
    }
  }
`

export default class GradeTable extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <span>Grades</span>
          <Link to='/newGrade' className='f4 fw6 db white link hover-red'>
            Add New Grade{' '}
          </Link>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Stream</th>
              </tr>
            </thead>
            <tbody>
              <Query query={SCHOOL_GRADES_QUERY} variables={{ email: 'silverbull@187.guru' }}>
                {({ data, loading }) => {
                  if (loading) {
                    return <span>Loading...</span>
                  }
                  return data.school.grades.edges.map(node => (
                    <tr>
                      <td>{node.node.name}</td>
                      <td>{node.node.stream}</td>
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
