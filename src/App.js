import React from 'react'
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  /* use this method to get external data */
   componentDidMount() {
     BooksAPI.getAll().then((books) => {
       this.setState({ books })
     })

   }
   moveToShelf = (book, shelf) => {
     BooksAPI.update(book, shelf);
     BooksAPI.getAll().then((books) => {
       this.setState({ books })
     }) //to update books on shelves after selection
   } //to update we needs to use update method from BooksAPI



  render() {

    return(
      <div className="app">
      <MainPage /* use props from parent to use/pass them to other components*/
      books={this.state.books}
      moveToShelf={this.moveToShelf}
      />
      </div>
    )
};
};
export default BooksApp
