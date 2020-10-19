import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Grade from './Grade'
import GradeGraph from './GradeGraph'

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

export default class GradeData extends React.Component {
  render () {
    return (
      <div>
        <article className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
          <GradeGraph />
          <div className='dtc v-mid pl3'>
            <h1 className='f6 f5-ns fw6 lh-title white mv0'>Students of this grade </h1>
          </div>
        </article>
        <Query query={SCHOOL_GRADES_QUERY} variables={{ email: sessionStorage.getItem("school") }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>
            }
            // console.log(data)
            return <Grade data={data.school.grades.edges[0].node} />
          }}
        </Query>
      </div>
    )
  }
}
