import React from "react";
import { Column, Row, Table, Td, Th, Tr } from "../globals";

const data: {
  [key: string]: {
    score: number;
  };
} = {
  fjdlafkdsa: { score: 12 },
  fssssssss: { score: 33 },
};

const TableComponent = () => {
  return (
    <Table>
      <Tr>
        <Th>順位</Th>
        <Th>id</Th> <Th>score</Th>
      </Tr>
      {Object.keys(data).map((key: any, index) => {
        const row = data[key];
        return (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{key}</Td>
            <Td>{row["score"]}</Td>
          </Tr>
        );
      })}
    </Table>
  );
};

export default TableComponent;
