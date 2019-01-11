import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Book from './book';

class BookList extends Component {
    render() {
        if (this.props.allBooksQuery && this.props.allBooksQuery.loading) {
            return <div>Loading books ...</div>
        }
        if (this.props.allBooksQuery && this.props.allBooksQuery.error) {
            return <div>Error loading books from server!</div>
        }
        
        const BooksToRender = this.props.allBooksQuery.books.edges
        console.log(BooksToRender)
        /*.map(book => (
            console.log(book.node.ID),
            console.log(book.node.Name)
        ))*/

        return (
            <div>                    
                { BooksToRender.map(book => (
                    <Book key={ book.node.id } book={ book.node }/>
                )) }
            </div>
        )
    }
}

const ALL_BOOKS_QUERY = gql`
query AllBooksQuery{
  books {
    edges {
      node {
        id
        name
        isbn
        author
        revision
      }
    }
  }
}`

export default graphql(ALL_BOOKS_QUERY, { name: 'allBooksQuery' }) (BookList)