import React from "react";

const Book = ({
  data: { 
    name,
    isbn,
    author,
    revision,
    lends
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
        <h2 className="f6 fw4 mt0 mb0 white-60">ISBN Number : {isbn}</h2>
        <h2 className="f6 fw4 mt0 mb0 white-60">Revision : {revision}</h2>
        <small>
            Author:{author}
        </small>
      </div>
      <div className="dtc v-mid">
      Lending History
      {lends.edges.map(lend => (
        <form className="w-100 tr">
            <small>
                <em>received_on: {lend.node.received_on} | due_on: {lend.node.due_on}</em><br/>
                <em>handed_over: {String(lend.node.handed_over)} | handed_over_on: {lend.node.handed_over_on}</em><br/>
            </small>
        </form>
        ))}
      </div>
    </article>
  </div>
);
export default Book;
