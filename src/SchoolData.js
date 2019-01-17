import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import SchoolName from './SchoolName';

const SCHOOL_QUERY = gql`
  query SchoolParentsQuery($email:String!){
  school(email:$email) {
    id
    name
    motto
    email
    website
    AddrPoBox
    AddrPostalCode
    AddrTown
    AddrCounty
    AddrCountry
  }
}`;

export default class SchoolData extends React.Component {
  render() {
    return (
      <div>
        <Query query={SCHOOL_QUERY} variables={{ email: "silverbull@187.guru" }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>;
            }
            console.log(data)
            return (
              <SchoolName data={data.school} key={data.school.id} />
            );
          }}
        </Query>
      </div>
    );
  }
}
