import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import './App.css';
import ThisMap from './components/Map.js';
import PlacesList from './components/PlacesList.js'

class App extends Component {
  state = {
    markers: [],
    center: {lat: 40.7191251, lng: -73.9984472},
    activeMarker: null,
    query: ''
  }

  componentWillMount () {
    fetch('https://api.foursquare.com/v2/venues/search?ll=40.7191,-73.9984&oauth_token=1W0UAFZQKQSAZI2JWVYZ0WJ2H0ZXL2PKU0SRBICKMQWT4SCZ&v=20180817')
    .then((response) => {
        // Code for handling API response
        return response.json()
    })
    .then((data) => {
       console.log('THis is the DAta', data.response.venues)
      this.setState({ markers: data.response.venues })
    })
    .catch((error) => {
        // Code for handling errors
        throw error;
    });
  }

  setActiveMarker = (activeMarker) => {
    this.setState({ activeMarker })
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  render() {
    /*
    **Creating the list to show when the user adds filters
    */
    let showingPlaces

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingPlaces = this.state.markers.filter((place) => match.test(place.name))
    } else {
      showingPlaces= this.state.markers
    }

    return (

      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to Little Italy</h1>
        </header>

        <PlacesList
          query={this.state.query}
          places={showingPlaces}
          updateQuery={this.updateQuery}
          onClickMarker={this.setActiveMarker}
        />

        <ThisMap
          containerElement={ <div className="map-container" /> }
          mapElement={ <div className="map" role="application" /> }
          center={this.state.center}
          places={showingPlaces}
          activeMarker={this.state.activeMarker}
          onClickMarker={this.setActiveMarker}
        />

      </div>

    );
  }
}

export default App;
