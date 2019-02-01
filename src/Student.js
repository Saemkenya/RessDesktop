import React, { Fragment } from 'react'

const Student = ({ data }) => (
  <div className='mw6 center'>
    <article className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
      <div className='dtc v-mid pl3'>
        {data.node.guardians.edges.map(parent => (
          <Fragment>
            <h2 className='f6 fw4 mt0 mb0 white-60'>
              {parent.node.salute + ' '}
              {parent.node.name}
            </h2>
            <p>{parent.node.cell}</p>
            <br />
          </Fragment>
        ))}
      </div>
    </article>
  </div>
)
export default Student
