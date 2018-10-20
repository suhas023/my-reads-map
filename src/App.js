import React, { Component } from 'react';
import BookShelf from './components/BookShelf'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookShelf />
      </div>
    );
  }
}

export default App;
