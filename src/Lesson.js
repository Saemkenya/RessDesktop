import React from "react";

const Lesson = ({
  data: { 
    name, 
    lesson_info,
    tutors
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
            <em>Start:{lesson_info.edges.map(node => node.node.Start).join(", ")}</em><br /> 
            <em>Stop:{lesson_info.edges.map(node => node.node.Stop).join(", ")}</em><br />
            <em>Duration:{lesson_info.edges.map(node => node.node.Duration).join(", ")}</em><br />
            <em>Done:{lesson_info.edges.map(node => node.node.Done).join(", ")}</em><br />
            <em>Topic:{lesson_info.edges.map(node => node.node.Topic).join(", ")}</em><br />
            <em>Files:{lesson_info.edges.map(node => node.node.Files).join(", ")} </em><br/>
            <em>Remarks:{lesson_info.edges.map(node => node.node.Remarks).join(", ")} </em><br/>
        </small>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr">
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
          <strong>
            Tutors:<br/> {tutors.edges.map(node => node.node.name).join(", ")}
          </strong>
          </button>
        </form>
      </div>
    </article>
  </div>
);
export default Lesson;
