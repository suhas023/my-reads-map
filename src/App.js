import React, { Component } from 'react';
import BookShelf from './components/BookShelf';
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

  render() {
    return (
      <div className="App">
        <BookShelf
          currentlyReading={this.state.currentlyReading} 
          wantToRead={this.state.wantToRead}
          read={this.state.read}
          shelfs = {this.validShelfs}
        />
      </div>
    );
  }
}

export default App;
