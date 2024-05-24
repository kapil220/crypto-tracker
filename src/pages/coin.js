import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/header";
import Loader from "../components/common/loader";
import { coinObject } from "../functions/coinobject";
import { List } from "@mui/material";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const [coinData, setCoinData] = useState();
  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log("RESPONSE>>>", response);

          setIsloading(false);
          coinObject(setCoinData, response.data);
          setIsloading(false);
        })
        .catch((error) => {
          console.log("ERROR>>>", error);
          setIsloading(false);
        });
    }
  }, [id]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
        </>
      )}
    </div>
  );
}

export default CoinPage;
