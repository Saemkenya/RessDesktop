import React from "react";

const Score = ({
  data: { 
    score,
    students,
    subjects,
    exams
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
        <h1 className="f6 f5-ns fw6 lh-title white mv0">Student: {students.edges.map(node => node.node.name).join(", ")} </h1>
        <h2 className="f6 fw4 mt0 mb0 white-60">Subject : {subjects.edges.map(node => node.node.name).join(", ")}</h2>
        <h2 className="f6 fw4 mt0 mb0 white-60">Exam : {exams.edges.map(node => node.node.name).join(", ")}</h2>
        <small>
          <em>Exam Date: {exams.edges.map(node => node.node.date).join(", ")}</em><br/>
          <em>Student NemisID: {students.edges.map(node => node.node.nemisNo).join(", ")}</em>
        </small>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr">
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
          <strong>
              Scored {score} %
          </strong>
          </button>
        </form>
      </div>
    </article>
  </div>
);
export default Score;
