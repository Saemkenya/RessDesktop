import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const SCHOOL_EXAMS_QUERY = gql`
  query schoolExams($email: String!) {
    school(email: $email) {
      id
      exams {
        edges {
          node {
            id
            name
            date
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

export default class ExamTable extends React.Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <Query query={SCHOOL_EXAMS_QUERY} variables={{ email: sessionStorage.getItem("school") }}>
            {({ data, loading }) => {
              if (loading) {
                return <span>Loading...</span>
              }
              // console.log(data)
              return data.school.exams.edges.map(node => (
                <tr>
                  <td>{node.node.name}</td>
                  <td>{node.node.date}</td>
                </tr>
              ))
            }}
          </Query>
          ;
        </tbody>
      </table>
    )
  }
}
