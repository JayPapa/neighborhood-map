This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Neighborhood App - Welcome to Little Italy, NY

## Project Overview

This single-page application was developed using React and featuring a map of Little Italy, NY rendered through the [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial).
There are map markers to identify locations, by clicking a marker on the map more information retreived from the [Foursquare PLaces API](https://developer.foursquare.com/places-api) are shown about that location.
An Hamburger Menu Button toggles a List of places on the left: clicking a name in the list view displays the information for the associated marker.
Through an Input field the user can easily discover and filter these locations both the markers on the map and the locations on the list.
The application is fully responsive and it is accessible for screen readers.

## Getting Started

### Install

To install this project, you can either clone this repository or download the zipped file.
Once downloaded, you need to run `npm install` on the CLI to install all the dependencies needed

### Run in development mode

 -  run `npm start` on CLI to start the Development server

### Run in propduction mode

 -  run `npm run build` on CLI to create a production build
 -  run `serve -s` on CLI to serve the production build in localhost

#### Service Worker

By default, the production build is a fully functional, offline-first Progressive Web App.

Progressive Web Apps are faster and more reliable than traditional web pages, and provide an engaging mobile experience:

 - All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background.
 - The app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the subway.
 - On mobile devices, your app can be added directly to the user's home screen, app icon and all. You can also re-engage users using web push notifications. This eliminates the need for the app store.

The sw-precache-webpack-plugin is integrated into production configuration, and it will take care of generating a service worker file that will automatically precache all of your local assets and keep them up to date as you deploy updates. The service worker will use a cache-first strategy for handling all requests for local assets, including the initial HTML, ensuring that your web app is reliably fast, even on a slow or unreliable network.

To enable the service worker it is necessary that you are running in production mode.

## Dependencies

This project was created from scratch, bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### React packages used:

 - [react-google-maps](https://github.com/tomchentw/react-google-maps)
 - [recompose](https://github.com/acdlite/recompose/blob/master/docs/API.md)
 - [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)

### API used:

 - [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) To render the map, the markers and the InfoWindows
 - [Foursquare PLaces API](https://developer.foursquare.com/places-api) To get the data visualised inside the InfoWindows
