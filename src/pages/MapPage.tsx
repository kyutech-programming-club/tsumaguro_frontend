import { GoogleMap } from "@react-google-maps/api";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import Header from "../components/Header";
import axios from "axios";
import { findConfigFile } from "typescript";
import Ranking from '../components/Ranking'

const MapPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [initialPos, setInitialPos] = useState({
    lat: 0,
    lng: 0,
  });
  const [realPos, setRealPos] = useState({
    lat: 0,
    lng: 0,
  });
  const [expectedPos, setExpectedPos] = useState({
    lat: null,
    lng: null,
  });

  //   初回時のみ読み込む
  useEffect(() => {
    axios.get("http://api.open-notify.org/iss-now.json").then((response) => {
      let position = response.data.iss_position;
      setInitialPos({
        lat: Number(position.latitude),
        lng: Number(position.longitude),
      });
    });
  }, []);

  const startGame = () => {
    axios.get("http://api.open-notify.org/iss-now.json").then((response) => {
      let position = response.data.iss_position;
      setInitialPos({
        lat: Number(position.latitude),
        lng: Number(position.longitude),
      });
      setRealPos({
        lat: Number(position.latitude),
        lng: Number(position.longitude),
      });
    });
    setIsPlaying(true);
  };

  const finishGame = async (clickedLatLng: any) => {
    setIsPlaying(false);
    setIsSelected(false);

    // expectedPosはOK
    console.log({
      user_id: "aaaa",
      user_latitude: expectedPos.lat,
      user_longitude: expectedPos.lng,
      answer_latidude: realPos.lat,
      answer_lngitude: realPos.lng,
    });

    await axios
      .post("https://d9ba-106-155-12-71.ngrok-free.app/userInput", {
        user_id: "aaaa",
        user_latitude: expectedPos.lat,
        user_longitude: expectedPos.lng,
        answer_latitude: realPos.lat,
        answer_longitude: realPos.lng,
      })
      .then((response) => {
        console.log(response);
      });
  };

  //　GoogleMapComponentの地図がクリックされるたびに走る関数
  const handleValueFromChild = (clickedLatLng: any) => {
    setIsSelected(true);
    setExpectedPos({
      lat: clickedLatLng.lat,
      lng: clickedLatLng.lng,
    });
    axios.get("http://api.open-notify.org/iss-now.json").then((response) => {
      let position = response.data.iss_position;
      //   console.log(position);
      setRealPos({
        lat: Number(position.latitude),
        lng: Number(position.longitude),
      });
    });

    // while (true) {
    //   document.addEventListener("keypress", (e) => {
    //     if (e.key === "Enter") {
    //       finishGame(clickedLatLng);
    //       break;
    //     }
    //   });
    // }
  };

  return (
    <>
      <Header />
      <ContentWrapper>
        <Container>
          <MapWrapper>
            <GoogleMapComponent
              pos={initialPos}
              onValueChange={handleValueFromChild}
            />
          </MapWrapper>

          {isPlaying ? (
            <>
              <span>
                スタート時のISSの座標は緯度{initialPos.lat}, 経度
                {initialPos.lng}
              </span>
              <span>
                あなたが選んだ座標は緯度{expectedPos.lat}, 経度
                {expectedPos.lng}
              </span>
            </>
          ) : (
            <button onClick={startGame}>ゲームを始める</button>
          )}
          {/* {isPlaying ? (
              <>
                <span>
                  スタート時のISSの座標は緯度{realPos.lat}, 経度
                  {realPos.lng}
                </span>
                <span>
                  あなたが選んだ座標は緯度{expectedPos.lat}, 経度
                  {expectedPos.lng}
                </span>
              </>
            ) : (
              <button onClick={startGame}>ゲームを始める</button>
            )} */}

          {isSelected ? <button onClick={finishGame}>決定する</button> : ""}
        </Container>
        <Ranking />
      </ContentWrapper>
    </>
  );
};

const MapWrapper = styled.div`
  margin: 64px;
  overflow: hidden;
  width: 80%;
  text-align: center;
  border: solid 1px black;
`;

const Container = styled.div`
  width: 60%;
  height: 60%;
  border-radius: 40px;
  background-color: green;
`;

const ContentWrapper = styled.div`
  display: flex;
`;
export default MapPage;
