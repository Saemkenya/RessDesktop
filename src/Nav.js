import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './static/Style.css'

class Nav extends Component {
  render () {
    const result = (
      <Fragment>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/parents' style={{ textDecoration: 'none' }}>
            Parents
          </Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/students'>Students</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/subjects'>Subjects</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/grades'>Grades</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/lessons'>Lessons</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/tts'>Timetable</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/books'>Books</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/fees'>FeeStructure</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/payments'>Payments</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/exams'>Examinations</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/scores'>Scores</Link>
        </div>
      </Fragment>
    )
    return result
  }
}
export default withRouter(Nav)
