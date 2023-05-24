import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom";
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import Header from './components/Header';
import Corosel from './components/Corosel';
function App() {

  


  return (
    
    
    <Router>
      <div className = "header" >
     
      
      
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>} exact></Route>
      
      <Route exact path="/coins/:id" element={<CoinPage/>}></Route>
      </Routes>
      </div>
      
   
    </Router>
    
  
  );
}

export default App;
