import React, { Component } from 'react';
import BookShelf from './components/bookshelf/BookShelf';
import SearchPage from './components/searchpage/SearchPage';
import NeighbourhoodLibraries from './components/neighbourhood-libraries/NeighbourhoodLibraries';
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
        for (let shelf in shelfs) {
          this.setState({ [shelf]: shelfs[shelf] })
        }
      });
  }

  changeShelf = (book, shelf) => {
    //If book was already in shelf, remove from old shelf.
    if (book.shelf) {
      let removeFromOldShelf = this.state[book.shelf].filter(b => b.id !== book.id);
      this.setState({ [book.shelf]: removeFromOldShelf });
    }

    //If book's new shelf exists, add to new shelf.
    if (shelf !== 'none') {
      book.shelf = shelf;
      let addToNewShelf = [...this.state[shelf], book];
      this.setState({ [shelf]: addToNewShelf });
    }

    bookAPi.update(book, shelf);
  }

  //Get object containing shelf and corresponding books IDs.
  getBookIDs = () => {
    let bookIDs = {};
    this.validShelfs.forEach(shelf => {
      bookIDs[shelf] = this.state[shelf].map(book => book.id);
    });
    return bookIDs;
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
              shelfs={this.validShelfs}
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
              bookIDs={this.getBookIDs()}
            />
          }
        />
        <Route
          exact
          path="/map"
          render={(props) =>
            <NeighbourhoodLibraries
              {...props}
            />
          }
        />
      </div>
    );
  }
}

export default App;
