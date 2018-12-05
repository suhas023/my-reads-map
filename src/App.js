import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MyReads from './main-components/my-reads/MyReads';
import NeighbourhoodLibraries from './main-components/neighbourhood-libraries/NeighbourhoodLibraries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          path='/'
          component={MyReads}
        />
        <Route
          exact
          path="/map"
          component={NeighbourhoodLibraries}
        />
      </div>
    );
  }
}

export default App;
