import React from "react";
import { NavLink } from "react-router-dom";

//Import CSS
import './navbar.css';

//Import Assets
import interimLogo from "../../assets/first-aid-kit.png";
import help from "../../assets/help.svg";
 
const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar-left">
        <NavLink className="navbar-brand" to="/">
          <img src={interimLogo} alt="logo" class="company-logo"/>
        </NavLink>
      </nav>
      <nav className="navbar-right">
        <NavLink className="navbar-brand" to="/">
          <img src={help} alt="logo" class="company-logo"/>
        </NavLink>
      </nav>
    </div>
  );
};
 
export default Navbar;