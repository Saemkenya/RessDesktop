import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Nav extends Component {
  render () {
    const result = (
      <div>
        <div className='pa1 lh-copy'>
          <Link to='/parents' className='f4 fw6 db white link hover-red'>
            Prts{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/students' className='f4 fw6 db white link hover-red'>
            Stds{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/depts' className='f4 fw6 db white link hover-red'>
            Depts{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/subjects' className='f4 fw6 db white link hover-red'>
            Subs{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/grades' className='f4 fw6 db white link hover-red'>
            Grds{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/lessons' className='f4 fw6 db white link hover-red'>
            Lssn{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/tts' className='f4 fw6 db white link hover-red'>
            TT{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/books' className='f4 fw6 db white link hover-red'>
            Bks{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/fees' className='f4 fw6 db white link hover-red'>
            FStr{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/payments' className='f4 fw6 db white link hover-red'>
            Pays{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/exams' className='f4 fw6 db white link hover-red'>
            Exms{' '}
          </Link>
        </div>
        <div className='pa1 lh-copy'>
          <Link to='/scores' className='f4 fw6 db white link hover-red'>
            Scos{' '}
          </Link>
        </div>
      </div>
    )
    return result
  }
}
export default withRouter(Nav)
