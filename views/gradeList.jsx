import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Grade from './grade';

class GradeList extends Component {
    render() {
        if (this.props.allGradesQuery && this.props.allGradesQuery.loading) {
            return <div>Loading grades ...</div>
        }
        if (this.props.allGradesQuery && this.props.allGradesQuery.error) {
            return <div>Error loading grades from server!</div>
        }
        
        const GradesToRender = this.props.allGradesQuery.grades.edges
        GradesToRender.map(grade => (
            console.log(grade.node.name),
            console.log(grade.node.stream)
        ))

        return (
            <div>                    
                { GradesToRender.map(grade => (
                    <Grade key={ grade.node.id } grade={ grade.node }/>
                )) }
            </div>
        )
    }
}

const ALL_GRADES_QUERY = gql`
query allGradesQuery {
  grades {
    edges {
      node {
        id
        name
        stream
      }
    }
  }
}`

export default graphql(ALL_GRADES_QUERY, { name: 'allGradesQuery' }) (GradeList)