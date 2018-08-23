import React, { Component } from "react"
import Book from './Book'
import Bookshelf from './Bookshelf'

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
<Bookshelf />

        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </a>
          </div>
      </div>
      </div>
    );
  }
}
export default MainPage;
