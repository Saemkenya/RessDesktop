import React from "react";

const Subject = ({
  data: { 
    name, 
    departments 
  }
}) => (
  <div className="mw6 center">
    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      <div className="dtc w2 w3-ns v-mid">
        <img src="http://localhost:18700/static/logor.gif" 
          className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
          alt="parent-avatar"
        />
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title white mv0">{name} </h1>
        <small>
            <em>Tutors: {departments.edges.map(node => node.node.tutors.edges.map(node => node.node.name))}</em>
        </small>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr">
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
          <strong>
            Department:<br/> {departments.edges.map(node => node.node.name).join(", ")}
          </strong>
          </button>
        </form>
      </div>
    </article>
  </div>
);
export default Subject;
