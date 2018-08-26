import React from "react";
import { Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  /* use this method to get external data and display all books*/
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
  changeShelf = (book, shelf) => {

    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
    BooksAPI.update(book, shelf); //to update books on shelves after selection
  }; //to update we needs to use update method from BooksAPI

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books}
              changeShelf={this.changeShelf}
              />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchPage
              changeShelf={this.changeShelf}
              books={this.state.books}
              updateSearching={this.updateSearching}
            />
          )}
        />
      </div>
    );
  }
}
export default BooksApp;
