import React, { Component} from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

function PlacesList (props) {
    let showingPlaces
    if (props.query) {
      const match = new RegExp(escapeRegExp(props.query), 'i')
      showingPlaces = props.places.filter((place) => match.test(place.title))
    } else {
      showingPlaces= props.places
    }
    return (

      <div className="items-container">
        <input type="text" name="search" placeholder="Search a place..." value={props.query} onChange={(e) => {props.updateQuery(e.target.value)}}></input>
        <ul>
          {showingPlaces.map( place => (
            <li key={place.title} className="place-item" onClick={() => {props.onClickMarker(place.title)}}>{place.title}</li>
          ))}
        </ul>
      </div>
    )
}

export default PlacesList;
