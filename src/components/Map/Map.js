import React from "react";
import {GoogleMap, LoadScript}  from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.438230,
  lng: -3.657400
};

 function Map() {
  return(
    <LoadScript googleMapsApiKey="AIzaSyD4Q2TuZgNxAGfzuASOD0kW7do4tm6a-ws">
        <GoogleMap 
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap>
    </LoadScript>
  ) 
  
}
export default React.memo(Map)


