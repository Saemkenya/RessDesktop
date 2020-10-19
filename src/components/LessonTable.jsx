import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const SCHOOL_LESSONS_QUERY = gql`
  query schoolLessons($email: String!) {
    school(email: $email) {
      id
      lessons {
        edges {
          node {
            id
            name
            lesson_info {
              edges {
                node {
                  Start
                  Stop
                  Duration
                  Done
                  Topic
                  Files
                  Remarks
                }
              }
            }
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
`

export default class LessonTable extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <span>Lessons</span>
          <Link to='/newLesson' className='f4 fw6 db white link hover-red'>
            Add New Lesson{' '}
          </Link>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>Start</th>
                <th>Stop</th>
                <th>Duration</th>
                <th>Done</th>
                <th>Topic</th>
                <th>Files</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <Query query={SCHOOL_LESSONS_QUERY} variables={{ email: sessionStorage.getItem("school") }}>
                {({ data, loading }) => {
                  if (loading) {
                    return <span>Loading...</span>
                  }
                  console.log(data.school.lessons.edges[0].node.lesson_info.edges[0].node.Start)
                  return data.school.lessons.edges.map(node => (
                    <tr>
                      <td>{node.node.name}</td>
                      <td>{node.node.lesson_info.edges[0].node.Start}</td>
                      <td>{node.node.lesson_info.edges[0].node.Stop}</td>
                      <td>{node.node.lesson_info.edges[0].node.Duration}</td>
                      <td>{String(node.node.lesson_info.edges[0].node.Done)}</td>
                      <td>{node.node.lesson_info.edges[0].node.Topic}</td>
                      <td>{node.node.lesson_info.edges[0].node.Files}</td>
                      <td>{node.node.lesson_info.edges[0].node.Remarks}</td>
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
