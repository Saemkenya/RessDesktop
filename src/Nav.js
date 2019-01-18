import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Nav extends Component {
    render() {
        return(<div>
            <div className="pa1 lh-copy">
                <Link to='/parents' className="f4 fw6 db white link hover-red">Parents </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/students' className="f4 fw6 db white link hover-red">Students </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/depts' className="f4 fw6 db white link hover-red">Departments </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/subjects' className="f4 fw6 db white link hover-red">Subjects </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/grades' className="f4 fw6 db white link hover-red">Grades </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/lessons' className="f4 fw6 db white link hover-red">Lessons </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/tts' className="f4 fw6 db white link hover-red">TimeTable </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/books' className="f4 fw6 db white link hover-red">Books </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/fees' className="f4 fw6 db white link hover-red">Fees Structure </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/payments' className="f4 fw6 db white link hover-red">Payments </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/exams' className="f4 fw6 db white link hover-red">Exams </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/scores' className="f4 fw6 db white link hover-red">Scores </Link>
            </div>
            </div>
        )
    }
}
export default withRouter(Nav)