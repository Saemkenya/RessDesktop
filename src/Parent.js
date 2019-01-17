import React from "react";

const Parent = ({
  data: { 
    salute, 
    name, 
    cell, 
    AddrCounty,
    AddrNationality,
    AddrPoBox,
    AddrPostalCode,
    AddrTown,
    IDno,
    NHIFno,
    email,
    students 
  }
}) => (
  <div className="mw6 center">
    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      <div className="dtc w2 w3-ns v-mid">
        <img src="http://localhost:18700/static/logo.gif" className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"/>
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title white mv0">{salute +" "+ name} </h1>
        <h2 className="f6 fw4 mt0 mb0 white-60">Cell Phone number : {cell}</h2>
        <h2 className="f6 fw4 mt0 mb0 white-60">Email Address : {email}</h2>
        <small>
          <em>ID Number: {IDno}</em>
          <em>NHIF Number: {NHIFno}</em><br/>
          <strong>P.O Box: {AddrPoBox +" Code:"+ AddrPostalCode +" "+ AddrTown}</strong><br />
          <strong>From: {AddrCounty +" "+ AddrNationality }</strong>
        </small>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr">
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
          <strong>
            Student:<br/> {students.edges.map(node => node.node.name).join(", ")}
          </strong>
          </button>
        </form>
      </div>
    </article>
  </div>
);
export default Parent;
