import { Component } from 'react';
import './Marker.css';

class Marker extends Component {

  constructor(props) {
    super(props);

    let { library, map, selectedID } = props;
    let lat = parseFloat(library.geometry.location.lat());
    let lng = parseFloat(library.geometry.location.lng());
    const uluru = { lat, lng };
    const marker = new window.google.maps.Marker({
      position: uluru,
      map: map,
    });
    marker.addListener("click", this.displayInfo);
    this.marker = marker;

    if (selectedID === library.id)
      this.displayInfo();
  }

  displayInfo = () => {
    let { library } = this.props;
    let info = `
    <div class="info-window"
      <h1 id="name">
        <Strong>${library.name}</strong>
      </h1>
      ${library.photos ? `<img src="${library.photos[0].getUrl()}" alt="restaurant ${library.name}'s image">` : ''}
      <span>
        Rating: ${library.rating} / 5
      </span>
      <span>
        Open now: <Strong>${library.opening_hours ? library.opening_hours.open_now : 'N/A'}</strong>
      </span>
      <span>
        <small>${library.formatted_address}</small>
      </span>
      <span>
        <small>Google Places</small>
      </span>
    </div>
    `;
    //bounce the marker once
    this.marker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(() => this.marker.setAnimation(null), 1000);
    // call parent's function to display 
    this.props.onShowInfoWindow(this.marker, library, info);
  }

  //display infow window if this library is selected in list
  shouldComponentUpdate(nextProps) {
    if (nextProps.selectedID === this.props.library.id && nextProps.selectedID !== this.props.selectedID) {
      this.displayInfo();
    }
    return false;
  }

  componentWillUnmount() {
    this.marker.setMap(null);
  }

  render() {
    return false;
  }
}

export default Marker;
