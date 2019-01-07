import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Student from './student';

class StudentList extends Component {
    render() {
        if (this.props.allStudentsQuery && this.props.allStudentsQuery.loading) {
            return <div>Loading students ...</div>
        }
        if (this.props.allStudentsQuery && this.props.allStudentsQuery.error) {
            return <div>Error loading students from server, are you connected?</div>
        }
        
        const StudentsToRender = this.props.allStudentsQuery.students.edges
        StudentsToRender.map(Student => (
            console.log(Student.node.name),
            console.log(Student.node.nemisNo)
        ))

        return (
            <div>                    
                { StudentsToRender.map(student => (
                    <Student key={ student.node.id } student={ student.node }/>
                )) }
            </div>
        )
    }
}

const ALL_STUDENTS_QUERY = gql`
query allStudents {
  students {
    edges {
      node {
        id
        name
        nemisNo
        nhifStatus
        bCertNo
        nickName
      }
    }
  }
}`

export default graphql(ALL_STUDENTS_QUERY, { name: 'allStudentsQuery' }) (StudentList)