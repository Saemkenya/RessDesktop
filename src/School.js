import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SchoolParents from './SchoolParents';
import 'tachyons';
import Nav from "./Nav";
import LoginForm from './LoginForm';
import SchoolData from './SchoolData';

export default class School extends Component {
    
    render() {
      return (
        <div>
            <div className="dt dt--fixed">
                <div className="dtc tc pv4 bg-black-05">
                    <SchoolData />
                </div>
            </div>
            <div className="dt dt--fixed">
                <div className="dtc tc pv4 white bg-black">
                    <Nav />
                </div>
                <div className="dtc w-80 tc pv4 white bg-black-70">
                <Switch>
                    <Route exact path='/' component={ SchoolParents }/>
                    <Route exact path='/login' component={ LoginForm }/>
                </Switch>
                </div>
                </div>
            <div className="dt dt--fixed h-25">
            <div className="dtc tc pv4 bg-black-10 lh-1">
                    LogIn: User One
                </div>
                <div className="dtc tc pv4 bg-black-05 lh-1">
                    Status: Connected to RESS
                </div>
                <div className="dtc tc pv4 bg-black-10 lh-1">
                    Role: Registrar
                </div>
                <div className="dtc tc pv4 bg-black-05 lh-1">
                    Task: Idle
                </div>
                <div className="dtc tc pv4 bg-black-10 lh-1">
                    Time: 12:00 noon
                </div>
            </div>
        </div>
      );
    }
  }