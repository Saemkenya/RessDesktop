import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './static/Style.css'

class NavReg extends Component {
  /**
   * Guardians
   * | Tutors
   * | Students
   * | Departments
   * | Subjects
   * | Grades
   * | Lessons
   * | Timetable
   * | Exams
   * */
  render () {
    const result = (
      <Fragment>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/parents'>Parents</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/parents'>Tutors</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/students'>Students</Link>
        </div>
        <div>
          <img src='http://localhost:18700/static/logor.gif' alt='icon' />
          <Link to='/depts'>Departments</Link>
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
          <Link to='/exams'>Examinations</Link>
        </div>
      </Fragment>
    )
    return result
  }
}
export default withRouter(NavReg)
