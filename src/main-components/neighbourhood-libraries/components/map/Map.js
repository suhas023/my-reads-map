import React, { Component } from 'react';
import Marker from '../marker/Marker';
import './Map.css';
import mapStyle from './mapStyle';

class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mapLoaded: false,
      loaction: {}
    }
    this.map = null;
    this.infoWindow = null;
    this.service = null;
  }

  showInfoWindow = (marker, library, info) => {
    this.infoWindow.setContent(info);
    this.infoWindow.setAnchor(marker);
    this.props.onSelectLibrary(library.id);
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.props.onDisplayGoogleMaps().then((google) => {
      let mapState = {
        zoom: 12,
        center: { lat: 13.1057669, lng: 77.6055739 },
        styles: mapStyle
      }
      let mapDOM = document.getElementById('map');
      this.map = new google.maps.Map(mapDOM, mapState);
      this.infoWindow = new google.maps.InfoWindow({maxWidth: 260, maxHeight:260});
      this.service = new google.maps.places.PlacesService(this.map);
      // deselect the library when infowindow is closed 
      google.maps.event.addListener(this.infoWindow, 'closeclick', () => {
        this.props.onSelectLibrary(null);
      });
      // set mapLoaded state to true
      this.setState({ mapLoaded: true });
      if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(this.setExactLocation, this.setDefaultLocation);
      } else {
        /* geolocation IS NOT available */
        this.setDefaultLocation();
      }
    });
  }

  setExactLocation = (position) => {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let location = new window.google.maps.LatLng(lat, lng);
    this.map.setCenter(location);
    this.service.textSearch({ query: 'library', radius: '500', location}, (r) => this.props.onLoadLibraries(r));
    this.setState({location});
  }

  setDefaultLocation = () => {
    let lat = 13.1057669;
    let lng = 77.6055739;
    let location = new window.google.maps.LatLng(lat, lng);
    this.service.textSearch({ query: 'library', radius: '500', location}, (r) => this.props.onLoadLibraries(r));
    this.setState({location});
  }

  render() {
    return (
      <div id="map" aria-label="map location" role="application">
        {
          this.state.mapLoaded && this.props.libraries.length ?
            this.props.libraries.map((library) =>
              <Marker
                key={library.id}
                library={library}
                map={this.map}
                selectedID={this.props.selectedID}
                onShowInfoWindow={this.showInfoWindow}
              />
            )
            : false
        }
      </div>
    );
  }
}

export default Map;