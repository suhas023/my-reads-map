import React, { Component } from 'react';
import Compartment from './Compartment';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as bookAPI from '../api/BooksAPI';
import '../styles/SearchPage.css';

class SearchPage extends Component {
  state = {
    query: '',
    shelfBooks: [],
    newBooks: []
  }

  onQueryChange = (e) => {
    let search = e.target.value;
    let newBooks = [];
    let shelfBooks = [];
    this.setState({query: search});

    /* Search for books.
       All books found in shelf are stored in 'shelfBooks'.
       Books not found are stored in 'newBooks'.
       If book is in a shelf, give it a shelf property in which it's stored.
    */
    bookAPI.search(escapeRegExp(search.trim()))
    .then(books => {
      if(!books || books.error) {
        this.setState({newBooks: [], shelfBooks: []});
        return;
      }
      /*
        filter returns true if books not found in shelf.
        And these books are stored in 'newBooks'.
      */
      newBooks = books.filter(book => {
        for(let shelf in this.props.booksID) {
          if(this.props.booksID[shelf].includes(book.id)) {
            book['shelf'] = shelf;
            book['inShelf'] = true;
            shelfBooks.push(book);
            return false;
          }
        }
        book['inShelf'] = false;
        return true;
      });

      this.setState({shelfBooks, newBooks});
    });
  }

  changeShelf = (book, newShelf) => {
    if(book.inShelf === true && newShelf === 'none') {
      book.inShelf = false;
      let removeFromOldShelf = this.state['shelfBooks'].filter(b => b.id !== book.id);
      this.setState({shelfBooks: removeFromOldShelf, newBooks:[...this.state.newBooks, book]});
    } else if (book.inShelf === false && newShelf !== 'none') {
      book.inShelf = true;
      let removeFromOldShelf = this.state['newBooks'].filter(b => b.id !== book.id);
      this.setState({shelfBooks: [...this.state.shelfBooks, book] , newBooks: removeFromOldShelf});
    }

    this.props.changeShelf(book, newShelf);
  }

  render() {
    return (
      <div className="search-page">
        <div className="search-bar">
          <Link className="close-search" to="/"></Link>
          <input
            value={this.state.query}
            onChange={this.onQueryChange}
            placeholder="Search by Name or Author"
          />
        </div>
        {(this.state.query) && (
          <div className="results">
            <Compartment
                  name={`Found ${this.state.newBooks.length} new book(s)`} 
                  books={this.state.newBooks}
                  changeShelf={this.changeShelf}
            />
            <Compartment
                  name={`Found ${this.state.shelfBooks.length} book(s) from shelf`} 
                  books={this.state.shelfBooks}
                  changeShelf={this.changeShelf}
            />
          </div>
        )}
      </div>
    );
  }
}

export default SearchPage;