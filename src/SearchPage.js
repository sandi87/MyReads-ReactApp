import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends Component {
  state = {
    query: "",
    searchBooks: []
  };
  updateQuery = query => {
    this.setState({
      query: query
    });
    this.updateSearching(query);
  };

  updateSearching = query => {
    if (query) {
      BooksAPI.search(query).then(searchBooks => {
        {
          /*if there is an error it change state to an array, for the map method can work properly*/
        }
        if (searchBooks.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: searchBooks });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* Link to the main page*/}
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBooks.map(searchBooks => {
              {/*now by comparing if book from shelf on main page has proper shelf selected on searchpage*/}
              let shelf = "none";
              this.props.books.map(
                book => (book.id === searchBooks.id ? (shelf = book.shelf) : "")
              );
              return (
                <li key={searchBooks.id}>
                  <Book
                    book={searchBooks}
                    changeShelf={this.props.changeShelf}
                    shelfValue={shelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
