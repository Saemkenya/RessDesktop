import React from 'react'

const Grade = ({ data: { name, stream, students } }) => (
  <div className='mw6 center'>
    <article className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
      <div className='dtc v-mid pl3'>
        {students.edges.map(student => (
          <div>
            <div className='dtc v-mid'>
              <img
                src='http://localhost:18700/static/logor.gif'
                className='ba b--black-10 db br2 h2 h3-ns'
                alt='parent-avatar'
              />
              <h1 className='f6 f5-ns fw6 lh-title white mv0'>{student.node.name} </h1>
              <small>
                <em>Nemis Number: {student.node.nemisNo}</em>
              </small>
            </div>
          </div>
        ))}
      </div>
    </article>
  </div>
)
export default Grade
