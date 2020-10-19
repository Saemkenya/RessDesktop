import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Subject from './Subject'
import DeptGraph from './DeptsGraph'

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
                        salute
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

export default class SubjectData extends Component {
  render () {
    return (
      <Fragment>
        <DeptGraph />
        <div>Subject Tutors</div>
        <article className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
          <Query query={SCHOOL_SUBJECTS_QUERY} variables={{ email: sessionStorage.getItem("school") }}>
            {({ data, loading }) => {
              if (loading) {
                return <span>Loading...</span>
              }
              // console.log(data)
              return <Subject data={data.school.subjects.edges[0].node} />
            }}
          </Query>
        </article>
      </Fragment>
    )
  }
}
