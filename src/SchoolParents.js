import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Parent from "./Parent";

const SCHOOL_PARENTS_QUERY = gql`
  query SchoolParentsQuery($email:String!){
  school(email:$email) {
    id
    users {
      edges {
        node {
          id
          salute
          name
          cell
          IDno
          NHIFno
          email
          AddrPoBox
          AddrPostalCode
          AddrTown
          AddrCounty
          AddrNationality
          createdAt
          students {
            edges {
              node {
                id
                name
                nemisNo
              }
            }
          }
        }
      }
    }
  }
}`;

export default class SchoolParents extends React.Component {
  render() {
    return (
      <div>
        <Query query={SCHOOL_PARENTS_QUERY} variables={{ email: "silverbull@187.guru" }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>;
            }
            console.log(data)
            return data.school.users.edges.map(node => (
              <Parent data={node.node} key={node.node.id} />
            ));
          }}
        </Query>
      </div>
    );
  }
}
