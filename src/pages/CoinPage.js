import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { SingleCoin } from '../components/Api';
import {
  LinearProgress,

  Typography,
  } from "@mui/material";
  import CoinInfo from '../components/CoinInfo';
  // import parse from 'react-html-parser';
  import "./Coinpage.css";
  


const CoinPage = () => {

  

  const {id} = useParams();
  const [coin,setCoins]= useState();


  const { currency, symbol } = CryptoState();


  const fetchCoin = async ()=>{
    const {data} = await axios.get(SingleCoin(id));
    setCoins(data);
  };
  console.log(coin)

  useEffect(()=>{
    fetchCoin();
  },[])


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;







  return (
    <div className="containers">
      <div className="sidebar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className="heading">
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className="description">
          {(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className="marketdata">
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="heading">
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="heading">
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="heading">
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
                
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinPage