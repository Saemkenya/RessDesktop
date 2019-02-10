import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import Lesson from './Lesson'
import LessonGraph from './LessonGraph'

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

export default class LessonData extends React.Component {
  render () {
    return (
      <div>
        <LessonGraph />

        <article className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
          <div className='dtc w2 w3-ns v-mid'>
            <img
              src='http://localhost:18700/static/logor.gif'
              className='ba b--black-10 db br2 w2 w3-ns h2 h3-ns'
              alt='student avatar'
            />
          </div>
          <div className='dtc v-mid pl3'>
            <h1 className='f6 f5-ns fw6 lh-title white mv0'>Lessons </h1>
          </div>
          <div className='dtc v-mid'>
            <div className='pa1 lh-copy'>
              <Link to='/newLesson' className='f4 fw6 db white link hover-red'>
                Add New Lesson{' '}
              </Link>
            </div>
          </div>
        </article>

        <Query query={SCHOOL_LESSONS_QUERY} variables={{ email: 'silverbull@187.guru' }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>
            }
            // console.log(data)
            return data.school.lessons.edges.map(node => <Lesson data={node.node} key={node.node.id} />)
          }}
        </Query>
      </div>
    )
  }
}
