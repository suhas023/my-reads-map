import React, { Component } from 'react';
import Aside from './components/aside/Aside';
import Map from './components/map/Map';
import Error from './components/error/Error';
import './NeighbourhoodLibraries.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      libraries: [],
      filteredLibraries: [],
      selectedLibraryID: null,
      err: [],
    }
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
    //handle Google Map's API error
    window.gm_authFailure = this.gm_authFailure;
  }

  gm_authFailure = () => {
    this.setState((prevState) => {
      return { err: [...prevState.err, 'Google Map Authorization Failed'] };
    });
  }

  getGoogleMaps = () => {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(window.google);
          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = 'AIzaSyDA9RLo-1ZBGb-eQRBPWUpIB-Z97cuiZTM';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&libraries=places&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }
    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  selectLibrary = (id) => {
    if (this.state.selectedLibraryID !== id)
      this.setState({ selectedLibraryID: id });
  }

  filterLibraries = (query) => {
    this.setState((prevState) => {
      let filteredLibraries = prevState.libraries.filter((library) => library.name.toLowerCase().includes(query));
      return { filteredLibraries };
    });
  }

  loadLibraries = (libraries) => {
    this.setState({ libraries: libraries, filteredLibraries: libraries });
    console.log(libraries);
  }

  render() {
    return (
      <main>
        {
          this.state.err.length ? <Error errorMessage={this.state.err.join(', ')} /> : false
        }
        <Aside
          libraries={this.state.filteredLibraries}
          selectedID={this.state.selectedLibraryID}
          onSelectLibrary={this.selectLibrary}
          onFilterLibraries={this.filterLibraries}
        />
        <Map
          libraries={this.state.filteredLibraries}
          selectedID={this.state.selectedLibraryID}
          onSelectLibrary={this.selectLibrary}
          onDisplayGoogleMaps={this.getGoogleMaps}
          onLoadLibraries={this.loadLibraries}
        />
      </main>
    );
  }
}

export default App;
