import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, InfoBox, Marker } from 'react-google-maps';

class Map extends Component {
  state = {
    isOpen: false
  }
  onToggleOpen = (isOpen) => {
    this.setState({ isOpen: !isOpen })
  }
  render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 } >
      </GoogleMap>
   ));
   return(
        <GoogleMapExample
          containerElement={ <div class="map-container" /> }
          mapElement={ <div class="map" role="application" /> }
        />
   );
   }
};
export default Map;
