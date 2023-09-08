import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.module.css";
import "./header.module.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="container d-flex justify-content-between">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Busness</NavLink>
          <NavLink to="/contact">Entertainment</NavLink>
          <NavLink to="/posts">General</NavLink>
          <NavLink to="/portfolios">Health</NavLink>
          <NavLink to="/lifecycle">Sports</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
