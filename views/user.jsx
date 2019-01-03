'use babel';

import React, { Component } from 'react';

class User extends Component {
  render() {
    return <div>
        <main className="mw6 center pt10">
        <article className="dt w-100 bb b--gray-05 pb2 mt2" href="#0">
            <div className="dtc w2 w3-ns v-mid">
                <img src="http://mrmrs.github.io/photos/p/2.jpg" className="ba b--gray-10 db br2 w2 w3-ns h2 h3-ns"/>
            </div>
            <div className="dtc v-mid pl3">
                <h1 className="f6 f5-ns fw6 lh-title white-80 mv0">{ this.props.user.salute } { this.props.user.name }</h1>
                <h2 className="f6 fw4 mt0 mb0 gray">Email: { this.props.user.email }</h2>
                <h2 className="f6 fw4 mt0 mb0 gray">National ID: { this.props.user.IDno }</h2>
                <h2 className="f6 fw4 mt0 mb0 gray">NHIF No: { this.props.user.NHIFno }</h2>
            </div>
            <div className="dtc v-mid">
                <form className="w-100 tr">
                <button className="f6 button-reset bg-white ba b--gray-10 dim pointer pv1 gray-60" type="submit">Cell: { this.props.user.cell }</button>
                </form>
            </div>
        </article>
    </main>        
    </div>;
  }
}
export default User