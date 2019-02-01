import React from 'react'

const Subject = ({ data: { departments } }) => (
  <div className='mw6 center'>
    <article className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
      {departments.edges[0].node.tutors.edges.map(node => (
        <div className='dtc w2 w3-ns v-mid'>
          <img
            src='http://localhost:18700/static/logor.gif'
            className='ba b--black-10 db br2 w2 w3-ns h2 h3-ns'
            alt='parent-avatar'
          />
          <div className='dtc v-mid pl3'>
            <h3 className='f6 f5-ns fw6 lh-title white mv0'>{node.node.salute + ' ' + node.node.name}</h3>
            <small />
          </div>
        </div>
      ))}
    </article>
  </div>
)
export default Subject
