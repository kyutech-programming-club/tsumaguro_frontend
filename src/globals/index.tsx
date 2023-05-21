import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const H1 = styled.h1`
  color: #ffffff;
  letter-spacing: 3px;
  text-shadow: 1px 1px 6px #000000;
`;

export const Button = styled.button`
  justify-self: center;
  border: none;
  background-color: #0d6efd;
  color: #fff;
  width: 40%;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
`;

export const Container = styled.div`
  padding: 24px;
  width: 60%;
  justify-content: center;
  align-items: center;
  height: fit-content;
  border-radius: 40px;
  background-color: #58dd58;
`;

export const MapWrapper = styled.div`
  position: relative;
  /* margin: 64px; */
  overflow: hidden;
  /* width: 80%; */
  text-align: center;
  border: solid 1px #58dd58;
  border-radius: 16px;
`;

export const TextWrapper = styled.div`
  text-align: center;
`;

export const Cover = styled.div<{ background: Boolean }>`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.background ? "rgba(255, 255, 255, 0.658)" : "white"};
  font-size: 10vh;
  justify-content: center;
  align-items: center;
`;

export const Th = styled.th`
  background-color: #58dd58;
  height: 10px;
`;

export const Tr = styled.tr`
  justify-content: center;
  align-items: center;
  height: 10px;
`;

export const Td = styled.td`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  height: fit-content;
  width: 20vw;
  margin: 0 24px;
  background-color: #ffffff;
  border: solid 1px black;
`;

export const H3 = styled.h3`
  letter-spacing: 3px;
  font-size: 40px;
`;
