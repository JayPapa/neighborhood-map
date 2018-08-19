import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import './App.css'
import Menu from './components/Menu.js'
import PlacesList from './components/PlacesList.js'
import ThisMap from './components/Map.js'
import Footer from './components/Footer.js'

class App extends Component {
  state = {
    markers: [],
    center: {lat: 40.7191251, lng: -73.9984472},
    activeMarker: null,
    isAnimated: false,
    query: '',
    isMenuToggle: false
  }

  componentWillMount () {
    fetch('https://api.foursquare.com/v2/venues/search?ll=40.7191,-73.9984&oauth_token=1W0UAFZQKQSAZI2JWVYZ0WJ2H0ZXL2PKU0SRBICKMQWT4SCZ&v=20180817')
    .catch((error) => {
      console.log('There was an error with the API request: ', error)
      alert('There was an error with the API request: check the JavaScript console to learn more ')
    })
    .then((response) => {
      console.log('API request successfully fetched')
      return response.json()
    })
    .then((data) => {
      console.log('Data successfully received from Foursquare')
      this.setState({ markers: data.response.venues })
    })
    if(window.google) {
      console.log('Google Map loaded successfully', window.google)
    } else {
      console.log("Google Map didn't load", window.google)
    }
  }

  setActiveMarker = (activeMarker) => {
    this.setState({ activeMarker })
  }

  toggleAnimation = (isAnimated) => {
    this.setState({ isAnimated: !isAnimated })
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  toggleMenu = () => {
    this.setState({ isMenuToggle: !this.state.isMenuToggle })
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
          <Menu
            isToggle={this.state.isMenuToggle}
            onMenuClick={this.toggleMenu}
          />
          <h1 className="App-title">Welcome to Little Italy, NY</h1>
          <PlacesList
          query={this.state.query}
          places={showingPlaces}
          updateQuery={this.updateQuery}
          onClickMarker={this.setActiveMarker}
          toggleAnimation={this.toggleAnimation}
          isToggle={this.state.isMenuToggle}
          onMenuClick={this.toggleMenu}
          />
        </header>


        <ThisMap
          containerElement={ <div className="map-container" /> }
          mapElement={ <div className="map" role="application" /> }
          center={this.state.center}
          places={showingPlaces}
          activeMarker={this.state.activeMarker}
          onClickMarker={this.setActiveMarker}
          isAnimated={this.state.isAnimated}
          toggleAnimation={this.toggleAnimation}
        />

        <Footer />
      </div>

    );
  }
}

export default App;
