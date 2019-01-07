import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Subject from './subject';

class SubjectList extends Component {
    render() {
        if (this.props.allSubjectsQuery && this.props.allSubjectsQuery.loading) {
            return <div>Loading subjects ...</div>
        }
        if (this.props.allSubjectsQuery && this.props.allSubjectsQuery.error) {
            return <div>Error loading subjects from server!</div>
        }
        
        const SubjectsToRender = this.props.allSubjectsQuery.subjects.edges
        SubjectsToRender.map(subject => (
            console.log(subject.node.id),
            console.log(subject.node.name)
        ))

        return (
            <div>                    
                { SubjectsToRender.map(subject => (
                    <Subject key={ subject.node.id } subject={ subject.node }/>
                )) }
            </div>
        )
    }
}

const ALL_SUBJECTS_QUERY = gql`
query allSubjectsQuery{
  subjects {
    edges {
      node {
        id
        name
      }
    }
  }
}`

export default graphql(ALL_SUBJECTS_QUERY, { name: 'allSubjectsQuery' }) (SubjectList)