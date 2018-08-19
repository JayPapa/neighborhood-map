import React from 'react';
const { compose } = require("recompose");

const {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const ThisMap = compose(
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
              onClick={() => {
                props.onClickMarker( place.id );
                props.toggleAnimation(false)}}
              animation={place.id === props.activeMarker &&
                props.isAnimated ? "1" : "-1"}
            >
          {place.id === props.activeMarker &&
            <InfoWindow key={place.name}
              onCloseClick={() => {props.toggleAnimation(true)}}>
              <div role="dialog" aria-modal={props.isAnimated} tabIndex="0">
                <h3>{place.name}</h3>
                {place.categories.map(category =>
                  <p key={category.id}> <strong>Category: </strong>{category.shortName}</p>)}
                <p><strong>Address:</strong> {place.location.address}</p>
                <p><strong>City: </strong>
                    {place.location.city}, {place.location.state} ({place.location.country})
                </p>
                <a href={ `https://foursquare.com/v/${place.id}`} alt='learn more about this venue' target="_blank">Learn more..</a>
              </div>
            </InfoWindow>}
          </Marker>
          )}
      </GoogleMap>

  ) );

export default ThisMap;
