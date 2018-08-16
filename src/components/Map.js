import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, InfoBox, Marker } from 'react-google-maps';

class Map extends Component {

  render() {
   const GoogleMapExample = withGoogleMap(props => (

      <GoogleMap
        defaultCenter = { { lat: 40.7191251, lng: -73.9984472 } }
        defaultZoom = { 15 } >
          <Marker
              position={{lat:40.7191251, lng:-73.9984472}}
            />
      </GoogleMap>

   ));
   return(
        <GoogleMapExample
          containerElement={ <div className="map-container" /> }
          mapElement={ <div className="map" role="application" /> }
        />
   );
   }
};
export default Map;
