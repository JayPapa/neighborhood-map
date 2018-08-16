import React, { Component} from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class PlacesList extends React.Component {
  state = {
    query: '',
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  render() {
    let showingPlaces
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingPlaces = this.props.places.filter((place) => match.test(place.title))
    } else {
      showingPlaces= this.props.places
    }
    return (
      <div className="items-container">
        <input type="text" name="search" placeholder="Search a place..." onChange={(e) => this.updateQuery(e.target.value)}></input>
        <ul>
          {showingPlaces.map( place => (
            <li key={place.title} className="place-item">{place.title}</li>
          ))}
        </ul>
      </div>
    )}
}

export default PlacesList;
