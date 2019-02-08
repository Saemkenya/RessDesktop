import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const SCHOOL_SUBJECTS_QUERY = gql`
  query schoolSubjects($email: String!) {
    school(email: $email) {
      id
      subjects {
        edges {
          node {
            name
            departments {
              edges {
                node {
                  name
                  tutors {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default class SubjectTable extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <span>Subjects</span>
          <ul>
            <li>
              <Link to='/newStudent' className='f4 fw6 db white link hover-red'>
                Add New Subject{' '}
              </Link>
            </li>
            <li>
              <Link to='/newDept' className='f4 fw6 db white link hover-red'>
                Add New Department{' '}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <Query query={SCHOOL_SUBJECTS_QUERY} variables={{ email: 'silverbull@187.guru' }}>
                {({ data, loading }) => {
                  if (loading) {
                    return <span>Loading...</span>
                  }
                  return data.school.subjects.edges.map(node => (
                    <tr>
                      <td>{node.node.name}</td>
                      <td>{node.node.departments.edges[1].node.name}</td>
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
