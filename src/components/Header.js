import React from 'react'

import '../App.css';
import { useNavigate } from 'react-router-dom';
import {CryptoState} from "../CryptoContext"
import { Select,MenuItem } from '@mui/material';

const Header = () => {
  const navigate = useNavigate();
  const {currency,setCurrency} = CryptoState();
 
  return (

    
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a onClick={()=>{navigate('/')}} className="navbar-brand" to="/">CoinEx - Crypto-Market</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="#">Home</a>
        </li>
       
        <Select className='curr mx-2'
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem className='curr' value={"USD"}>USD</MenuItem>
              <MenuItem  className='curr' value={"INR"}>INR</MenuItem>
            </Select>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
 

  )
}

export default Header