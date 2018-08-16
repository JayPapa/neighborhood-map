import React from 'react';
const { compose, withStateHandlers } = require("recompose");

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");


const ThisMap = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withGoogleMap
)(props =>(
      <GoogleMap
        defaultCenter = { props.center }
        defaultZoom = { 18 } >
          {props.places.map(place =>
          <Marker
              key={place.id}
              title={place.name}
              position={place.location}
              onClick={() => {props.onClickMarker( place.id )}}
            >
          {place.id === props.activeMarker && <InfoWindow key={place.name} onCloseClick={props.onToggleOpen}>
            <h3>{place.name}</h3>
          </InfoWindow>}
          </Marker>
          )}
      </GoogleMap>

  ) );

export default ThisMap;
