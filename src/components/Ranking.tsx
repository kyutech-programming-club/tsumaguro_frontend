import React, { useEffect, useState } from "react";
import TableComponent from "./Table";
import { Column } from "../globals";
import axios from "axios";

const Ranking = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchRanking();
  }, []);

  const fetchRanking = async () => {
    await axios
      .get("http://127.0.0.1:5013/userInput/Result", {
        withCredentials: true,
      })
      .then((response) => {
        const ranking = response.data;
        setData(ranking);
      });
  };

  return (
    <Column>
      <h2>ランキング</h2>
      {data ? <TableComponent ranking={data} /> : <p>Loading...</p>}
    </Column>
  );
};

export default Ranking;
