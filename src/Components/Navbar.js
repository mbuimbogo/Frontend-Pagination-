import React from 'react'
import { NavLink } from 'react-router-dom';


const linkStyles = {
    display: "inline-block",
    float: "right",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    TextDecoration: "none",
    color: "white",
}

const Navbar = () => {

  return (
    <div>
        
         <NavLink to="/login"
        exact style={linkStyles}
        activeStyle = {{background: "darkblue",}}>
            Login
        </NavLink>

       <NavLink to= "/about"
        exact style={linkStyles}
        activeStyle={{background: "darkblue",}}>
        About
        </NavLink>

        <NavLink to="/"
        exact style={linkStyles}
        activeStyle={{background: "darkblue",}}>
            Home
        </NavLink>

       
    </div>
  )
}

export default Navbar;
