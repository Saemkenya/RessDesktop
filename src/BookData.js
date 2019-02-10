import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Book from './Book';
import { Link } from 'react-router-dom';
import BookGraph from './BookGraph';

const SCHOOL_BOOKS_QUERY = gql`
  query schoolBooks($email: String!) {
  school(email: $email) {
    id
    books {
      edges {
        node {
          id
          name
          isbn
          author
          revision
          lends {
            edges {
              node {
                received_on
                due_on
                handed_over
                handed_over_on
              }
            }
          }
        }
      }
    }
  }
}`;

export default class BookData extends React.Component {
  render() {
    return (
      <div>
<BookGraph />
        <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div className="dtc w2 w3-ns v-mid">
              <img src="http://localhost:18700/static/logor.gif" 
                  className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
                  alt="student avatar"/>
          </div>
          <div className="dtc v-mid pl3">
              <h1 className="f6 f5-ns fw6 lh-title white mv0">Books </h1>
          </div>
          <div className="dtc v-mid">
          <div className="pa1 lh-copy">
                <Link to='/newBook' className="f4 fw6 db white link hover-red">Add Book </Link>
            </div>
          </div>
          </article>

        <Query query={SCHOOL_BOOKS_QUERY} variables={{ email: "silverbull@187.guru" }}>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>;
            }
            // console.log(data)
            return data.school.books.edges.map(node => (
              <Book data={node.node} key={node.node.id} />
            ));
          }}
        </Query>
      </div>
    );
  }
}
