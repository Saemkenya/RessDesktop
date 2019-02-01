import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

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

export default class SubjectTable extends Component {
  render () {
    return (
      <Fragment>
        <h1>Subjects</h1>
        <Link to='/newStudent' className='f4 fw6 db white link hover-red'>
          Add New Subject{' '}
        </Link>
        <Link to='/newDept' className='f4 fw6 db white link hover-red'>
          Add New Department{' '}
        </Link>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <Query query={SCHOOL_SUBJECTS_QUERY} variables={{ email: 'silverbull@187.guru' }}>
              {({ data, loading }) => {
                if (loading) {
                  return <span>Loading...</span>
                }
                return data.school.subjects.edges.map(node => (
                  <tr>
                    <td>{node.node.name}</td>
                    <td>{node.node.departments.edges[1].node.name}</td>
                  </tr>
                ))
              }}
            </Query>
            ;
          </tbody>
        </table>
      </Fragment>
    )
  }
}
/*
<div>

  <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
    <div className="dtc w2 w3-ns v-mid">
        <img src="http://localhost:18700/static/logor.gif"
            className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
            alt="student avatar"/>
    </div>
    <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title white mv0">Subjects </h1>
    </div>
    <div className="dtc v-mid">
    <div className="pa1 lh-copy">
          <Link to='/newSubject' className="f4 fw6 db white link hover-red">Add New Subject </Link>
      </div>
    </div>
    </article>

  <Query query={SCHOOL_SUBJECTS_QUERY} variables={{ email: "silverbull@187.guru" }}>
    {({ data, loading }) => {
      if (loading) {
        return <span>Loading...</span>;
      }
      // console.log(data)
      return data.school.subjects.edges.map(node => (
        <Subject data={node.node} key={node.node.id} />
      ));
    }}
  </Query>
</div> */
