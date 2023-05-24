import React from 'react'
import "./Coininfo.css"
import { CryptoState } from '../CryptoContext';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { HistoricalChart } from './Api';
import {
  LinearProgress,
  createTheme,
  ThemeProvider,
  CircularProgress,

  Typography,
  } from "@mui/material";
  import { Line } from "react-chartjs-2";
 import{Chart as Chartjs} from "chart.js/auto"
  import { chartDays } from './Data';
  import SelectButton from './SelectButton';
 

  




const CoinInfo = ({coin}) => {

  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [flag,setflag] = useState(false);


  const fetchHistoricdata = async ()=>{
    const {data} = await axios.get(HistoricalChart(coin.id,days,currency));
    setflag(true);
    setHistoricData(data.prices)
  };

  useEffect(()=>{
    fetchHistoricdata();

  },[days,currency]);


  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });







  return (
    <ThemeProvider theme={darkTheme}>
    <div className="containers1">
      {!historicData ? (
        <CircularProgress
          style={{ color: "gold" }}
          size={250}
          thickness={1}
        />
      ) : (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {setDays(day.value);
                  setflag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </>
      )}
    </div>
  </ThemeProvider>
  )
}

export default CoinInfo