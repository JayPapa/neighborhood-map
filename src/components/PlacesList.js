import React from 'react';

function PlacesList (props) {
    return (
      <div className="items-container">
        <input type="text" name="search" placeholder="Search a place..." value={props.query} onChange={(e) => {props.updateQuery(e.target.value)}}></input>
        <ul>
          {props.places.map( place => (
            <li key={place.name} className="place-item" onClick={() => {props.onClickMarker(place.id)}}>{place.name}</li>
          ))}
        </ul>
      </div>
    )
}

export default PlacesList;
