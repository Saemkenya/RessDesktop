import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Nav extends Component {
    render() {
        return(<div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">Parents </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">Students </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">Depatments </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">Subjects </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">Grades </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">Lessons </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">TimeTable </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">Books </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">Lends </Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/new' className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">New Parent</Link>
            </div>
            </div>
        )
    }
}
export default withRouter(Nav)