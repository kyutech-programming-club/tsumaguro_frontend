import React from "react";
import TableComponent from "./Table";
import { Column } from "../globals";

const Ranking = () => {
  return (
    <Column>
      <p>ランキング</p>
      <TableComponent />
    </Column>
  );
};

export default Ranking;
