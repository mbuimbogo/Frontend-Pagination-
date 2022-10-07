import React from 'react';
import {Switch,  Route} from "react-router-dom";
import { useState } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //  const [darkMode, setDarkMode] = useState(false)
  
  return(
    <div>
      {/* <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className='container'>
      <span> Light Mode</span>
      <div className='switch-container'>
        <label className='switch'>
      <input type="checkbox" onChange={()=> setDarkMode(!darkMode)}/>
        <span className="slide rounded"></span>
        </label>
      </div>
      <span> Dark Mode</span>
      </div>
      </div> */}
    <Navbar setIsLoggedIn={setIsLoggedIn}/>
    <Switch>
      <Route exact path="/about"> <About/> </Route>
      <Route exact path="/Login"> <Login setIsLoggedIn={setIsLoggedIn}/> </Route>
      <Route exact path="/"> <Home isLoggedIn={isLoggedIn}/></Route>
    </Switch>
   
    </div>
  ) ;
}

export default App;
