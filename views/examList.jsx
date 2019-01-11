import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Exam from './exam';

class ExamList extends Component {
    render() {
        if (this.props.allExamsQuery && this.props.allExamsQuery.loading) {
            return <div>Loading exams ...</div>
        }
        if (this.props.allExamsQuery && this.props.allExamsQuery.error) {
            return <div>Error loading users from server!</div>
        }
        
        const ExamsToRender = this.props.allExamsQuery.exams.edges
        ExamsToRender.map(exam => (
            console.log(exam.node.grades.edges[0].node.name),
            console.log(exam.node.grades.edges[0].node.stream)
        ))

        return (
            <div>                    
                { ExamsToRender.map(exam => (
                    <Exam key={ exam.node.id } exam={ exam.node }/>
                )) }
            </div>
        )
    }
}

const ALL_EXAMS_QUERY = gql`
query allExamsQuery {
  exams {
    edges {
      node {
        id
        name
        createdAt
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
}`

export default graphql(ALL_EXAMS_QUERY, { name: 'allExamsQuery' }) (ExamList)