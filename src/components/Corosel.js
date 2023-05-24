import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import { TrendingCoins } from "./Api";
import axios from "axios";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "./Corosel.css";


const Corosel = () => {
  

  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async function fetchtrendingCoins() {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log(data);
    setTrending(data);
  }

  useEffect(() => {
    fetchtrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      
        <Link className="carouselItem21" to={`/coins/${coin.id}`}>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
          <span>
            {coin?.symbol}
            &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </Link>
      
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    // <h3>corosel</h3>
    
      <div className="mainfile21">
        
        
        <AliceCarousel className=""
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          
          responsive={responsive}
          items={items}
          autoPlay
        />
        </div>
        
    
    
  );
};

export default Corosel;
