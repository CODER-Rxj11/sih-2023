"use client";
import * as React from "react";
import Map from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g"; // Set your mapbox token her

export default function MapComponent() {
  return (
    <Map
      initialViewState={{
        latitude: 34.0837,
        longitude: 74.7973,
        zoom: 6,
      }}
      style={{margin: "auto", width: "80vw", height: "100vh" }}
      mapStyle="mapbox://styles/simmmple/ckwxecg1wapzp14s9qlus38p0"
      mapboxAccessToken={MAPBOX_TOKEN}
    ></Map>
  );
}
