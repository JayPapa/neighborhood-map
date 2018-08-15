import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import PlacesList from './components/PlacesList.js'
class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Little Italy</h1>
        </header>
        <PlacesList />
        <Map isMarkerShown />
      </div>
    );
  }
}

export default App;
