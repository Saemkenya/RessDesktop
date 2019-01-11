'use babel';

import React, { Component } from 'react';

class TimeTable extends Component {
  render() {
    return <div>
        <main className="mw6 center pt10">
        <article className="dt w-100 bb b--gray-05 pb2 mt2" href="#0">
            <div className="dtc w2 w3-ns v-mid">
                <img src="http://mrmrs.github.io/photos/p/2.jpg" className="ba b--gray-10 db br2 w2 w3-ns h2 h3-ns"/>
            </div>
            <div className="dtc v-mid pl3">
                <h1 className="f6 f5-ns fw6 lh-title white-80 mv0">{ this.props.timeTable.TimeDate  }</h1>
            </div>
            <div className="dtc v-mid">
                <form className="w-100 tr">
                <button className="f6 button-reset bg-white ba b--white-10 dim pointer pv1 gray-60" type="submit">TimeTable ID: { this.props.timeTable.ID }</button>
                </form>
            </div>
        </article>
    </main>        
    </div>;
  }
}
export default TimeTable