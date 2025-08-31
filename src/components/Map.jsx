import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => (
  <div className="text-[#157682] text-lg font-bold">
    📍
  </div>
);

const USA_CENTER = {
  lat: 37.0902,  // Latitude for USA center
  lng: -95.7129, // Longitude for USA center
};

const Map = () => {
  return (
    <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAye-n_8atCIdZJj6r4UwEOsqUrPKdOcdw" }}
        defaultCenter={USA_CENTER}
        defaultZoom={4} // Zoomed out to show most of USA
      >
        <MapMarker lat={37.0902} lng={-95.7129} text="USA" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;