import React from 'react';
import {Switch,  Route} from "react-router-dom";
import { useState } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <div>
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
