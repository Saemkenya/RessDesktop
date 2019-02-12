import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SchoolData from '../SchoolData'
import ScoreGraph from '../ScoreGraph'
import PaymentGraph from '../PaymentGraph'
import ParentTable from './ParentTable'
import StudentTable from './StudentTable'
import DeptGraph from '../DeptsGraph'
import GradeTable from './GradeTable'
import FeeTable from './FeeTable'
import ExamTable from './ExamTable'
import SubjectTable from './SubjectTable'
import NewParent from '../NewParent'
import NewStudent from '../NewStudent'
import NewDepartment from '../NewDepartment'
import NewSubject from '../NewSubject'
import NewGrade from '../NewGrade'
import NewLesson from '../NewLesson'
import NewTimeTable from '../NewTT'
import NewBook from '../NewBook'
import NewFeeStructure from '../NewFee'
import NewPayment from '../NewPayment'
import NewExam from '../NewExam'
import NewScore from '../NewScore'
import SchoolParents from '../ParentData'
import SignIn from '../SignInForm'
import StudentData from '../StudentData'
import DepartmentData from '../DepartmentData'
import SubjectData from '../SubjectData'
import GradeData from '../GradeData'
import LessonData from '../LessonData'
import TimeTableData from '../TimeTableData'
import BookData from '../BookData'
import FeeData from '../FeeData'
import PaymentData from '../PaymentData'
import ExamData from '../ExamData'
import ScoreData from '../ScoreData'
import SignInData from '../SigInData'
import Footer from './Footer'
import LessonTable from './LessonTable'
import TimeTable from './Tt'
import BookTable from './BookTable'

import Nav from '../Nav'

class Main extends Component {
  render () {
    return (
      <div className='body-wrapper-main'>
        <SchoolData />
        <div className='main-body-content'>
          <div className='body-side-menu'>
            Menu
            <Nav roles={this.props.roles} />
          </div>
          <div className='body-header-bottom'>
            <Switch>
              <Route exact path='/scores' component={ScoreGraph} />
              <Route exact path='/payments' component={PaymentGraph} />
              <Route exact path='/parents' component={ParentTable} />
              <Route exact path='/students' component={StudentTable} />
              <Route exact path='/depts' component={DeptGraph} />
              <Route exact path='/grades' component={GradeTable} />
              <Route exact path='/lessons' component={LessonTable} />
              <Route exact path='/tts' component={TimeTable} />
              <Route exact path='/books' component={BookTable} />
              <Route exact path='/fees' component={FeeTable} />
              <Route exact path='/exams' component={ExamTable} />
              <Route exact path='/subjects' component={SubjectTable} />
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
            </Switch>
          </div>
          <div className='body-details-right'>
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
              <Route exact path='/logout' component={SignInData} />
            </Switch>
          </div>
          <div className='body-header-footer scroll-right'>
            <Footer roles={this.props.roles} email={this.props.email}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
