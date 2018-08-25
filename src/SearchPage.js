import React, { Component } from 'react'
import Book from "./Book";
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    query: '',
    searchBooks: []
  }
  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchBooks(query);
  }

  updateSearchBooks = (query) => {
    if(query) {
    BooksAPI.search(query).then((searchBooks) => {
      {/*if there is an error it change state to an array, for the map method can work properly*/}
      if (searchBooks.error) {
        this.setState({searchBooks: [] });
      } else {
        this.setState({ searchBooks: searchBooks})
      }
    })
  } else {
    this.setState({ searchedBooks: [] });
  }
  }

  render() {

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author" value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
             this.state.searchBooks.map(searchBooks => (
              <li key={searchBooks.id}>
              <Book
              book={searchBooks}
              />
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
