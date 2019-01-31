import React from 'react'

const Parent = ({ data }) => (
  <div className='mw6 center'>
    <article className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
      <div className='dtc w2 w3-ns v-mid' />
      {data[0].node.students.edges.map(node => (
        <div className='dtc v-mid pl3'>
          <img
            src='http://localhost:18700/static/logor.gif'
            className='ba b--black-10 db br2 w2 w3-ns h2 h3-ns'
            alt='parent-avatar'
          />
          <h2 className='f6 fw4 mt0 mb0 white-60'>{node.node.name}</h2>
          <small>
            <em>{node.node.nemisNo}</em>
          </small>
          <br />
        </div>
      ))}
    </article>
  </div>
)
export default Parent
