import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useCallback, useRef, useState } from "react";
import PlaceInfo from "./PlaceInfo";

const GoogleMapComponent = (props: any) => {
  const [isShown, setIsShown] = useState(false);
  const [selectedPos, setSelectedPos] = useState({ lat: 0, lng: 0 });

  const containerStyle = {
    height: "600px",
    margin: 0,
  };

  const center = {
    lat: props.pos.lat,
    lng: props.pos.lng,
  };

  const handleMapClick = (event: any) => {
    const clickedLatLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setSelectedPos(clickedLatLng);
    setIsShown(true);
    console.log(clickedLatLng)
    props.onValueChange(clickedLatLng); // コールバック関数を呼び出して値を渡す
  };
                                                               
  // const unko = {
  //   lat: 43.048225,
  //   lng: 141.49701,
  // };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAIgVY1vidYS4CZ2JPaGEk2wcbALLTm6sM">
      <GoogleMap
        id="map"
        onClick={handleMapClick}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
        <Marker position={center} />
        {isShown ? <Marker position={selectedPos} /> : ""}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
