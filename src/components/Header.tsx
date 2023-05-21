import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledDiv>
      <H2>座標を当てろ</H2>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: 72px;
  background-color: red;
`;

const H2 = styled.h2`
  text-align: center;
  color: white;
  margin: 0;
`;

export default Header;
