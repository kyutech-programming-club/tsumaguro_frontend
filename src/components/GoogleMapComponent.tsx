import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import React, { useCallback, useRef, useState } from "react";
import PlaceInfo from "./PlaceInfo";
import styled from "styled-components";

const GoogleMapComponent = (props: any) => {
  // const [isShown, setIsShown] = useState(false);
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const [selectedPos, setSelectedPos] = useState({ lat: 0, lng: 0 });

  const containerStyle = {
    height: "600px",
    margin: 0,
  };

  const center = {
    lat: props.pos.lat,
    lng: props.pos.lng,
  };

  // 地図がクリックされた時
  const handleMapClick = (event: any) => {
    if (!props.isFinished) {
      const clickedLatLng = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      setSelectedPos(clickedLatLng);
      // setIsShown(true);
      console.log(clickedLatLng);
      props.onValueChange(clickedLatLng); // コールバック関数を呼び出して値を渡す
    }
  };

  const infoWindowOptions = {
    pixelOffset: size,
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAIgVY1vidYS4CZ2JPaGEk2wcbALLTm6sM"
      onLoad={() => createOffsetSize()}
    >
      <GoogleMap
        id="map"
        mapTypeId="hybrid"
        onClick={handleMapClick}
        mapContainerStyle={containerStyle}
        center={props.isFinished ? props.realPos : center}
        zoom={10}
      >
        {props.isFinished ? (
          <>
            <Marker position={props.realPos} />
            <InfoWindow position={props.realPos} options={infoWindowOptions}>
              <StyledDiv>
                <h1>正解はここ！！</h1>
              </StyledDiv>
            </InfoWindow>
          </>
        ) : (
          <>
            <Marker position={center} />
            <InfoWindow position={center} options={infoWindowOptions}>
              <StyledDiv>
                <h1>スタート時のISSの座標</h1>
              </StyledDiv>
            </InfoWindow>
          </>
        )}
        {props.isShown ? (
          <>
            <Marker position={selectedPos} />{" "}
            <InfoWindow position={selectedPos} options={infoWindowOptions}>
              <StyledDiv>
                <h1>あなたが選択した座標</h1>
              </StyledDiv>
            </InfoWindow>
          </>
        ) : (
          ""
        )}
      </GoogleMap>
    </LoadScript>
  );
};

const StyledDiv = styled.div`
  background: "white";
  font-size: 5;
`;

export default GoogleMapComponent;
