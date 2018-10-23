import React, { Component } from 'react';
import BookShelf from './components/BookShelf';
import SearchPage from './components/SearchPage';
import { Route } from 'react-router-dom';
import * as bookAPi from './api/BooksAPI';
import './App.css';

class App extends Component {
  
  state = {
    allBooks : [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  validShelfs = ['currentlyReading', 'wantToRead', 'read'];

  componentDidMount() {
    bookAPi.getAll()
    .then(books => {
      let shelfs = {
        currentlyReading: [],
        wantToRead: [],
        read: []
      };
      this.setState({allBooks: books});
      books.forEach(book => {
        shelfs[book.shelf].push(book);
      });
      for(let shelf in shelfs) {
        this.setState({[shelf]: shelfs[shelf]})
      }
    });
  }

  changeShelf = (book, shelf) => {
    if(book.shelf) {
      let removeFromOldShelf = this.state[book.shelf].filter(b => b.id !== book.id);
      this.setState({[book.shelf]: removeFromOldShelf});
    }

    if(shelf !== 'none') {
      book.shelf = shelf;
      let addToNewShelf = [...this.state[shelf], book];
      this.setState({[shelf]: addToNewShelf});
    }

    bookAPi.update(book, shelf);
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
            />
          }
        />
      </div>
    );
  }
}

export default App;
