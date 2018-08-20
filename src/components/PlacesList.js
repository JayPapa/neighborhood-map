import React from 'react';

function PlacesList (props) {
  // if the button menu is toggled then set the class to show the nav
  let toggleClass = props.isToggle ? "list-container" : "close";
    return (
      <nav aria-label="Select a place" className={toggleClass}>
        <input type="text" name="search"
          aria-label="Search a place in Little Italy, New York"
          placeholder="Search a place..." value={props.query}
          tabIndex="0" onChange={(e) => {props.updateQuery(e.target.value)}}>
        </input>
        <ul role="menu">
          // map through the list of places and set a list item for each
          {props.places.map( place => (
            <li key={place.name} className="place-item" role="menuitem"
            onClick={() => {
              props.onClickMarker(place.id);
              props.toggleAnimation(false);
              props.onMenuClick()
            }}>
            <button>{place.name}</button></li>
          ))}
        </ul>
      </nav>
    )
}

export default PlacesList;
