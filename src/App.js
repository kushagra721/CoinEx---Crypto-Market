import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import Header from './components/Header';
import { makeStyles } from '@mui/material/styles';
function App() {

  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor: "#14161a",
      color:"white",
      minheight:"100vh",

    }

  }));

  const classes=useStyles();


  return (
    
    <Router>
      <div className={classes.App}>
      
      
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>} exact></Route>
      <Route path="/coins/:id" element={<CoinPage/>}></Route>
      </Routes>
    </div> 
    </Router>
  
  );
}

export default App;
