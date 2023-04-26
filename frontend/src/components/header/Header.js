import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"
import Nav from "../nav/Nav";

const Header = () => {
  return (
    <header className="main-header">
      <NavLink to="/">
        <h2>My shop</h2>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
