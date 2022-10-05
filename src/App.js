import React from 'react';
import {Switch,  Route} from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';


function App() {

  return(
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/about"> <About/> </Route>
      <Route exact path="/Login"> <Login/> </Route>
      <Route exact path="/"> <Home/></Route>
    </Switch>
   
    </div>
  ) ;
}

export default App;
