import React, { Component } from 'react';
const { compose, withProps, withStateHandlers } = require("recompose");

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
              key={place.title}
              title={place.title}
              position={place.position}
              onClick={props.onToggleOpen}
            >
          {props.isOpen && <InfoWindow key={place.title} onCloseClick={props.onToggleOpen}>
            <h3>{place.title}</h3>
          </InfoWindow>}
          </Marker>
          )}
      </GoogleMap>

  ) );

export default ThisMap;
