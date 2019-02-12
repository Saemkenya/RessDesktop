import React, { Component, Fragment } from 'react'

class Footer extends Component {
  state = {}
  render () {
    return (
      <Fragment>
        <div className='scroll-right-text'>Student Login</div>
        <div className='scroll-right-text'>
          Status:<span> Connected ...</span>
        </div>
        <div className='scroll-right-text'>
          Notifications: <span>No New Notifications ...</span>
        </div>
        <div className='scroll-right-text'>
          Suggestion Box: <span>No New Messages ...</span>
        </div>
        <div className='scroll-right-text'>{this.props.email}</div>
        <div className='scroll-right-text'>{this.props.roles.map(role => '  ' + role)}</div>
      </Fragment>
    )
  }
}

export default Footer
/*
<style style="text/css">

</style>

<div class="scroll-right">
<p>Scroll right... </p>
</div>
*/
