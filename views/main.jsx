'use babel';

import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from "./nav";
import UserList from './userList';
import CreateUser from './createUser';
import studentList from './studentList';
import deptList from './deptList';
import subjectList from './subjectList';
import gradeList from './gradeList';
import lessonList from './lessonList';
import timeTableList from './timeTableList';
import bookList from './bookList';
import examList from './examList';
import scoreList from './scoreList';
import feeList from './feeList';
import paymentList from './paymentList';

class Main extends React.Component {
  render() {
    return (<div>
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-20 w-20-ns">
            <div className="bg-gray tc pv4">
              <Nav />
            </div>
          </div>
          <div className="fl w-80 w-80-ns">
            <div className="bg-gray tc pv4">
              <Switch>
                <Route exact path='/' component={ UserList }/>
                <Route exact path='/new' component={ CreateUser }/>
                <Route exact path='/students' component={ studentList }/>
                <Route exact path='/depts' component={ deptList }/>
                <Route exact path='/subjects' component={ subjectList }/>
                <Route exact path='/grades' component={ gradeList }/>
                <Route exact path='/lessons' component={ lessonList }/> 
                <Route exact path='/tts' component={ timeTableList }/> 
                <Route exact path='/books' component={ bookList }/> 
                <Route exact path='/exams' component={ examList }/>  
                <Route exact path='/scores' component={ scoreList }/>                
                <Route exact path='/fees' component={ feeList }/>                
                <Route exact path='/payments' component={ paymentList }/>                
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>)
    }
}
export default Main