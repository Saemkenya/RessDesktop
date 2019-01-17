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
  <div>
    <h2>{salute +" "+ name}</h2>
    <p> Cell Phone number : {cell}</p>
    <p> Email Address : {email}</p>
    <p>
      <small>
        <em>ID Number: {IDno}</em>
        <em>NHIF Number: {NHIFno}</em>
        {" / "}<br/>
        <strong>Student name: {students.edges.map(node => node.node.name).join(", ")}</strong><br />
        <strong>P.O Box: {AddrPoBox +" Code:"+ AddrPostalCode +" "+ AddrTown}</strong><br />
        <strong>From: {AddrCounty +" "+ AddrNationality }</strong>
      </small>
    </p>
  </div>
);
/**
 * AddrCounty
AddrNationality
AddrPoBox
AddrPostalCode
AddrTown
IDno
NHIFno
email
 */

export default Parent;
