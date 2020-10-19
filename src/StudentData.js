import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Student from './Student'
import StudentGraph from './StudentGraph'

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
            scores {
              edges {
                node {
                  score
                  exams {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                  subjects {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
            guardians {
              edges {
                node {
                  salute
                  name
                  cell
                }
              }
            }
          }
        }
      }
    }
  }
`

export default class StudentData extends React.Component {
  render () {
    return (
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
            <h1 className='f6 f5-ns fw6 lh-title white mv0'>Student's Guardians </h1>
          </div>
        </article>
        <Query query={SCHOOL_STUDENTS_QUERY} variables={{ email: sessionStorage.getItem("school") }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>
            }
            return <StudentGraph data={data.school.students.edges[0]} />
          }}
        </Query>

        <Query query={SCHOOL_STUDENTS_QUERY} variables={{ email: sessionStorage.getItem("school") }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>
            }
            return <Student data={data.school.students.edges[0]} />
          }}
        </Query>
      </div>
    )
  }
}
