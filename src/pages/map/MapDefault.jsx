import React from 'react'
import MapComponent from './MapComponent';
import { useLoadScript } from '@react-google-maps/api';

function MapDefault() {
    const key = "AIzaSyAet8Mk1nPvOn_AebLE5ZxXoGejOD8tPzA";
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAet8Mk1nPvOn_AebLE5ZxXoGejOD8tPzA" // Add your API key
    });
  return (<MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: `90vh`,
              margin: `auto`,
              border: "2px solid black"
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    
  )
}

export default MapDefault