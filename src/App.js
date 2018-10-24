import React, { Component } from 'react';
import BookShelf from './components/BookShelf';
import SearchPage from './components/SearchPage';
import { Route } from 'react-router-dom';
import * as bookAPi from './api/BooksAPI';
import './App.css';

class App extends Component {
  
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  //Valid shelfs a book can be placed under.
  validShelfs = ['currentlyReading', 'wantToRead', 'read'];

  componentDidMount() {
    bookAPi.getAll()
    .then(books => {
      let shelfs = {
        currentlyReading: [],
        wantToRead: [],
        read: []
      };
      //Add each book to corresponding shelf.
      books.forEach(book => {
        shelfs[book.shelf].push(book);
      });
      //Update each shelf in the component state.
      for(let shelf in shelfs) {
        this.setState({[shelf]: shelfs[shelf]})
      }
    });
  }

  changeShelf = (book, shelf) => {
    //If book was already in shelf, remove from old shelf.
    if(book.shelf) {
      let removeFromOldShelf = this.state[book.shelf].filter(b => b.id !== book.id);
      this.setState({[book.shelf]: removeFromOldShelf});
    }

    //If book's new shelf exists, add to new shelf.
    if(shelf !== 'none') {
      book.shelf = shelf;
      let addToNewShelf = [...this.state[shelf], book];
      this.setState({[shelf]: addToNewShelf});
    }

    bookAPi.update(book, shelf);
  }

  //Get object containing shelf and corresponding books IDs.
  getBooksID = () => {
    let booksID = {};
    this.validShelfs.forEach(shelf => {
      booksID[shelf] = this.state[shelf].map(book => book.id);
    });
    return booksID;
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path='/'
          render={(props) =>
            <BookShelf
              {...props}
              currentlyReading={this.state.currentlyReading} 
              wantToRead={this.state.wantToRead}
              read={this.state.read}
              shelfs = {this.validShelfs}
              changeShelf={this.changeShelf}
            />
          }
        />
        <Route
          exact
          path="/search"
          render={(props) => 
            <SearchPage
              {...props}
              changeShelf={this.changeShelf}
              booksID={this.getBooksID()}
            />
          }
        />
      </div>
    );
  }
}

export default App;
