import React from 'react';

function PlacesList (props) {
  return (
    <div className="items-container">
      <input type="text" name="search" placeholder="Search a place..."></input>
      <ul>
        <li class="place-item">First Item</li>
        <li class="place-item">First Item</li>
        <li class="place-item">First Item</li>
        <li class="place-item">First Item</li>
      </ul>
    </div>
  )
}

export default PlacesList;
