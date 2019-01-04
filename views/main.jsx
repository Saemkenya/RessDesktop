'use babel';

import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from "./nav";
import UserList from './userList';
import CreateUser from './createUser';

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
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>)
    }
}
export default Main