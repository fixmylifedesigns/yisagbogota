import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyle from './mapStyle'
// import MenuButton from './material-ui/menu'

function Map(props) {
  return (
    <div>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 4.660601, lng: -74.060664 }}
        // defaultOptions={{ styles: mapStyle }}
      />
      <Marker
        position={{
          lat: 4.660601,
          lng: -74.060664
        }}
        // label={{
        //   float: "left",
        //   color: "white",
        //   fontWeight: "bold",
        //   fontSize: "18px",
        //   text: "A"
        // }}
        // options={{
        //   zIndex: 1000
        // }}
      />
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap(props) {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "500px",
        height: "400px",
        margin: "auto",
        // borderRadius: "30px"
      }}
    >
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
