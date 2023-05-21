import React from "react";
import { Column, Row, Table, Td, Th, Tr } from "../globals";

const TableComponent = (props: any) => {
  // console.log(props);
  // console.log(props.ranking[0])
  return (
    <Table>
      <Tr>
        <Th>順位</Th>
        <Th>id</Th> <Th>score</Th>
      </Tr>
      {Object.keys(props.ranking).map((key: any, index) => {
        const row = props.ranking[index];
        return (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{row["id"]}</Td>
            <Td>{row["score"]}</Td>
          </Tr>
        );
      })}
    </Table>
  );
};

export default TableComponent;
