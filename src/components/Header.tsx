import React from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { Row } from "../globals";

const Header = () => {
  const uid = Cookies.get("uid");
  return (
    <StyledDiv>
      <H2>国際宇宙ステーション(ISS)の座標を当てろ</H2>
      <H2>あなたのIDは {uid}</H2>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: 72px;
  background-color: #58dd58;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  text-align: center;
  letter-spacing: 2px;
  color: white;
  margin: 0;
`;

export default Header;
