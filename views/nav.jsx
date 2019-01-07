import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Nav extends Component {
    render() {
        return(<div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw6 db white link hover-red">Parents </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/students' className="f4 fw6 db white link hover-red">Students </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/depts' className="f4 fw6 db white link hover-red">Depatments </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/subjects' className="f4 fw6 db white link hover-red">Subjects </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/grades' className="f4 fw6 db white link hover-red">Grades </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw6 db white link hover-red">Lessons </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw6 db white link hover-red">TimeTable </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw6 db white link hover-red">Books </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw6 db white link hover-red">Lends </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/new' className="f4 fw6 db white link hover-red">New Parent</Link>
            </div>
            </div>
        )
    }
}
export default withRouter(Nav)