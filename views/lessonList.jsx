import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Lesson from './lesson';

class LessonList extends Component {
    render() {
        if (this.props.allLessonsQuery && this.props.allLessonsQuery.loading) {
            return <div>Loading lessons ...</div>
        }
        if (this.props.allLessonsQuery && this.props.allLessonsQuery.error) {
            return <div>Error loading lessons from server!</div>
        }
        
        const LessonsToRender = this.props.allLessonsQuery.lessons.edges
        LessonsToRender.map(lesson => (
            console.log(lesson.node.id),
            console.log(lesson.node.name)
        ))

        return (
            <div>                    
                { LessonsToRender.map(lesson => (
                    <Lesson key={ lesson.node.id } lesson={ lesson.node }/>
                )) }
            </div>
        )
    }
}

const ALL_LESSONS_QUERY = gql`
query allLessonsQuery{
  lessons {
    edges {
      node {
        id
        name
      }
    }
  }
}`

export default graphql(ALL_LESSONS_QUERY, { name: 'allLessonsQuery' }) (LessonList)