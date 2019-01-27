import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SchoolParents from './ParentData'
import 'tachyons'
import Nav from './Nav'
import SchoolData from './SchoolData'
import StudentData from './StudentData'
import DepartmentData from './DepartmentData'
import SubjectData from './SubjectData'
import GradeData from './GradeData'
import LessonData from './LessonData'
import TimeTableData from './TimeTableData'
import BookData from './BookData'
import FeeData from './FeeData'
import ExamData from './ExamData'
import PaymentData from './PaymentData'
import ScoreData from './ScoreData'
import NewParent from './NewParent'
import NewStudent from './NewStudent'
import NewDepartment from './NewDepartment'
import NewSubject from './NewSubject'
import NewGrade from './NewGrade'
import NewLesson from './NewLesson'
import NewTimeTable from './NewTT'
import NewBook from './NewBook'
import NewFeeStructure from './NewFee'
import NewPayment from './NewPayment'
import NewExam from './NewExam'
import NewScore from './NewScore'
import { Link } from 'react-router-dom'
import SignIn from './SignInForm'
import SignInData from './SigInData'

export default class School extends Component {
  render () {
    return (
      <div>
        <div className='dt dt--fixed'>
          <div className='dtc tc pv4 bg-black-05'>
            <SchoolData />
          </div>
        </div>
        <div className='dt dt--fixed'>
          <div className='dtc tc pv4 white bg-black'>
            <Nav />
          </div>
          <div className='dtc w-80 tc pv4 white bg-black-70'>
            <Switch>
              <Route exact path='/parents' component={SchoolParents} />
              <Route exact path='/login' component={SignIn} />
              <Route exact path='/students' component={StudentData} />
              <Route exact path='/depts' component={DepartmentData} />
              <Route exact path='/subjects' component={SubjectData} />
              <Route exact path='/grades' component={GradeData} />
              <Route exact path='/lessons' component={LessonData} />
              <Route exact path='/tts' component={TimeTableData} />
              <Route exact path='/books' component={BookData} />
              <Route exact path='/fees' component={FeeData} />
              <Route exact path='/payments' component={PaymentData} />
              <Route exact path='/exams' component={ExamData} />
              <Route exact path='/scores' component={ScoreData} />
              <Route exact path='/newParent' component={NewParent} />
              <Route exact path='/newStudent' component={NewStudent} />
              <Route exact path='/newDept' component={NewDepartment} />
              <Route exact path='/newSubject' component={NewSubject} />
              <Route exact path='/newGrade' component={NewGrade} />
              <Route exact path='/newLesson' component={NewLesson} />
              <Route exact path='/newTT' component={NewTimeTable} />
              <Route exact path='/newBook' component={NewBook} />
              <Route exact path='/newFee' component={NewFeeStructure} />
              <Route exact path='/newPay' component={NewPayment} />
              <Route exact path='/newExam' component={NewExam} />
              <Route exact path='/newScore' component={NewScore} />
              <Route exact path='/logout' component={SignInData} />
            </Switch>
          </div>
        </div>
        <div className='dt dt--fixed h-25'>
          <div className='dtc tc pv4 bg-black-10 lh-1'>
            <div className='pa1 lh-copy'>
              <Link to='/logout' className='f4 fw6 db white link hover-red'>
                Sign Out: {this.props.email}
              </Link>
            </div>
          </div>
          <div className='dtc tc pv4 bg-black-10 lh-1'>Roles: {this.props.roles.map(role => '  ' + role)}</div>
        </div>
      </div>
    )
  }
}
