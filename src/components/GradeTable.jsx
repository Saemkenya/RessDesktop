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
        <h1>Grades</h1>
        <Link to='/newGrade' className='f4 fw6 db white link hover-red'>
          Add New Grade{' '}
        </Link>
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
            ;
          </tbody>
        </table>
      </Fragment>
    )
  }
}
/*
      <div>
        <article className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
          <div className='dtc w2 w3-ns v-mid'>
            <img
              src='http://localhost:18700/static/logor.gif'
              className='ba b--black-10 db br2 w2 w3-ns h2 h3-ns'
              alt='student avatar'
            />
          </div>
          <div className='dtc v-mid pl3'>
            <h1 className='f6 f5-ns fw6 lh-title white mv0'>Grades </h1>
          </div>
          <div className='dtc v-mid'>
            <div className='pa1 lh-copy'>
              <Link to='/newGrade' className='f4 fw6 db white link hover-red'>
                Add New Grade{' '}
              </Link>
            </div>
          </div>
        </article>

        <Query query={SCHOOL_GRADES_QUERY} variables={{ email: 'silverbull@187.guru' }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>
            }
            // console.log(data)
            return data.school.grades.edges.map(node => <Grade data={node.node} key={node.node.id} />)
          }}
        </Query>
      </div>
*/
