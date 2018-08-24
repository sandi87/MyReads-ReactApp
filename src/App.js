import React from 'react'
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  {/* use this method to get external data */}
   componentDidMount() {
     BooksAPI.getAll().then((books) => {
       this.setState({ books })
     })

   }
  render() {

    return(
      <div className="app">
      <MainPage {/* use props to use them on MainPage*/}
      books={this.state.books}
      />
      </div>
    )
};
};
export default BooksApp
