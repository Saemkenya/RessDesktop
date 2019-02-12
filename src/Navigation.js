import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './static/Style.css'

const MngMenu = [
  'Guardians',
  'Accountants',
  'Registrars',
  'Librarians',
  'Tutors',
  'Students',
  'School',
  'Departments',
  'Subjects',
  'Grades',
  'Lessons',
  'Timetable',
  'Exams',
  'Scores',
  'FeeStructure',
  'Payments',
  'Books'
]

const RegMenu = [
  'Guardians',
  'Tutors',
  'Students',
  'Departments',
  'Subjects',
  'Grades',
  'Lessons',
  'Timetable',
  'Exams',
  'Scores'
]

const AccMenu = ['Guardians', 'Tutors', 'Librarians', 'Students', 'FeeStructure', 'Payments']

const LibMenu = ['Students', 'Books', 'Lends']

const TutMenu = [
  'Tutors',
  'Students',
  'Departments',
  'Subjects',
  'Grades',
  'Lessons',
  'Timetable',
  'Books',
  'Exams',
  'Scores'
]

const StdMenu = ['Students', 'Subjects', 'Lessons', 'Timetable', 'Books', 'Lends', 'Exams', 'Scores']
const Menu = []

class Nav extends Component {
  state = {
    Guardians: '/parents',
    Accountants: '/parents',
    Registrars: '/parents',
    Librarians: '/parents',
    Tutors: '/parents',
    Students: '/students',
    Subjects: '/subjects',
    Grades: '/grades',
    Books: '/books',
    Lends: '/lends',
    Departments: '/depts',
    Lessons: '/lessons',
    Timetable: '/tts',
    Exams: '/exams',
    Scores: '/scores',
    FeeStructure: '/fees',
    Payments: '/payments'
  }
  render () {
    // console.log('Menu: ' + Menu)
    this.props.roles.includes('Registrar') ? RegMenu.map(item => Menu.push(item)) : Menu.push('')
    this.props.roles.includes('Accountant') ? AccMenu.map(item => Menu.push(item)) : Menu.push('')
    this.props.roles.includes('Manager') ? MngMenu.map(item => Menu.push(item)) : Menu.push('')
    this.props.roles.includes('Librarian') ? LibMenu.map(item => Menu.push(item)) : Menu.push('')
    this.props.roles.includes('Tutor') ? TutMenu.map(item => Menu.push(item)) : Menu.push('')
    this.props.roles.includes('Student') ? StdMenu.map(item => Menu.push(item)) : Menu.push('')
    const finalMenu = new Set(Menu)
    finalMenu.forEach(item => console.log(item))
    const result = (
      <Fragment>
        {/* {console.log(Object.keys(this.state)[0])}
        {console.log(Object.values(this.state)[0])} */}
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
