import styled from "styled-components";
import React, { useEffect, useState } from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import Header from "../components/Header";
import axios from "axios";
import TimerComponent from "../components/Timer";
import Ranking from "../components/Ranking";
import "../index.css";
import {
  Button,
  Column,
  Container,
  CountTxt,
  Cover,
  H1,
  MapWrapper,
  Row,
  TextWrapper,
} from "../globals";

const MapPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [scoreShown, setScoreShown] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [userScore, setUserScore] = useState(0);
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

  // 点数とか
  let element = (props: any) => {
    if (props.scoreShown) {
      return (
        <Column>
          <H1>スコア: {props.userScore}</H1>
          <Button onClick={replayGame}>もう一度プレイする</Button>
        </Column>
      );
    } else if (props.isSelected) {
      return (
        <Column>
          <span>
            あなたが選んだ座標は緯度{expectedPos.lat}, 経度
            {expectedPos.lng}
          </span>
          <Button onClick={fetchScore}>決定する</Button>
        </Column>
      );
    } else if (props.isPlaying) {
      return (
        <Row>
          <span>
            スタート時のISSの座標は緯度{initialPos.lat}, 経度
            {initialPos.lng}
          </span>
        </Row>
      );
    } else if (props.scoreShown) {
      return <>aiueo</>;
    }
  };

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

  //　ゲームを始める
  const startGame = (value: any) => {
    setIsPlaying(true);
  };

  // スコアを取得
  const fetchScore = async (clickedLatLng: any) => {
    await axios
      .post("https://dc03-153-137-36-250.ngrok-free.app/userInput", {
        user_id: "aaaa",
        user_latitude: expectedPos.lat,
        user_longitude: expectedPos.lng,
        answer_latitude: realPos.lat,
        answer_longitude: realPos.lng,
      })
      .then((response) => {
        const score = response.data.score;
        console.log(score);
        setUserScore(score);
        setScoreShown(true);
      });

    setIsFinished(true);
  };

  // もう一度遊ぶ
  const replayGame = async (clickedLatLng: any) => {
    setScoreShown(false);
    setIsPlaying(false);
    setIsSelected(false);
    setIsCounting(false);
    setIsFinished(false);
    setIsShown(false);
  };

  // タイマーをスタート
  const startTimer = () => {
    // axios.get("http://api.open-notify.org/iss-now.json").then((response) => {
    //   let position = response.data.iss_position;
    //   setInitialPos({
    //     lat: Number(position.latitude),
    //     lng: Number(position.longitude),
    //   });
    // });
    setIsCounting(true);
  };

  //  初回タイマーをスタート時のみ実行
  useEffect(() => {
    axios.get("http://api.open-notify.org/iss-now.json").then((response) => {
      let position = response.data.iss_position;
      setInitialPos({
        lat: Number(position.latitude),
        lng: Number(position.longitude),
      });
    });
    console.log("test");
  }, [isCounting]);

  //　GoogleMapComponentの地図がクリックされるたびに走る関数
  const handleValueFromChild = (clickedLatLng: any) => {
    if (!isFinished) {
      setIsShown(true);
      setIsSelected(true);
      setExpectedPos({
        lat: clickedLatLng.lat,
        lng: clickedLatLng.lng,
      });
      axios.get("http://api.open-notify.org/iss-now.json").then((response) => {
        let position = response.data.iss_position;
        setRealPos({
          lat: Number(position.latitude),
          lng: Number(position.longitude),
        });
      });
    }
  };

  return (
    <>
      <Header />
      <ContentWrapper>
        <Container>
          <MapWrapper>
            <GoogleMapComponent
              pos={initialPos}
              realPos={realPos}
              isFinished={isFinished}
              isShown={isShown}
              onValueChange={handleValueFromChild}
            />

            {isPlaying ? (
              ""
            ) : (
              <button className="cover-button" onClick={startTimer}>
                <Cover background={isCounting}>
                  {isCounting ? (
                    <TimerComponent
                      whenZero={startGame}
                      isCounting={isCounting}
                    />
                  ) : (
                    <p>Click to Start</p>
                  )}
                </Cover>
              </button>
            )}
          </MapWrapper>
          <TextWrapper>
            {element({ isSelected, isPlaying, scoreShown, userScore })}
          </TextWrapper>
        </Container>
        <Ranking />
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 64px 64px;
`;
export default MapPage;
