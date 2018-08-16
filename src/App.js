import React, { Component } from 'react';
import './App.css';
import ThisMap from './components/Map.js';
import PlacesList from './components/PlacesList.js'

class App extends Component {
  state = {
    markers: [
      {title: 'La Mela Restaurant', position: {lat: 40.7191251, lng: -73.9984472} },
      {title: 'Benito One Restaurant', position: {lat: 40.7191251, lng: -73.9984472} },
      {title: "Sal's Little Italy", position: {lat: 40.7193813, lng: -73.9983929} },
      {title: 'Italian American Museum', position: {lat: 40.7187622, lng: -73.9987811} },
      {title: 'Dahing Seafood Market', position: {lat: 40.7185183, lng: -73.9981347} },
      {title: 'Mulberry Street Cigars', position: {lat: 40.7185183, lng: -73.9981347} }],
    center: {lat: 40.7191251, lng: -73.9984472},
    activeMarker: null
  }
  setActiveMarker = (activeMarker) => {
    this.setState({ activeMarker })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Little Italy</h1>
        </header>
        <PlacesList places={this.state.markers}/>
        <ThisMap
          containerElement={ <div className="map-container" /> }
          mapElement={ <div className="map" role="application" /> }
          center={this.state.center}
          places={this.state.markers}
          activeMarker={this.state.activeMarker}
          onClickMarker={this.setActiveMarker} />
      </div>
    );
  }
}

export default App;
