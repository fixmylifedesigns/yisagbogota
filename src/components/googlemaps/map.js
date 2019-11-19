import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
function Map() {
  const mapSettings = {
    fullscreenControl: false,
    zoomControl: false,
    mapTypeControl: false,
  };
  return (
    <div>
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 4.660601, lng: -74.060664 }}
        defaultOptions={ mapSettings }
      >
        <Marker
          position={{
            lat: 4.660601,
            lng: -74.060664
          }}
        />
      </GoogleMap>
    </div>
  );
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "20px",
        border: "solid 5px #282c34",
        width: "100%",
        height: "100%"
      }}
    >
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
