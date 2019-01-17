import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Nav extends Component {
    render() {
        return(<div>
            <div className="pa1 lh-copy">
                <Link to='/login' className="f4 fw6 db white link hover-red">Sign In</Link>
            </div>
            <div className="pa1 lh-copy">
                <Link to='/' className="f4 fw6 db white link hover-red">Parents </Link>
            </div>
            </div>
        )
    }
}
export default withRouter(Nav)