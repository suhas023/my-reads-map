import React from 'react';
import { Component } from 'react';
import * as bookAPi from '../api/BooksAPI';

class BookShelf extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    bookAPi.getAll()
    .then(data => this.setState({books: data}));
  }

  render() {
    return (
      <div className="book-shelf">
        <header><h1>My Reads</h1></header>
        <div className="categories">

        </div>
      </div>
    );
  }
}

export default BookShelf;