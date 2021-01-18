import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/cards" activeClassName="active">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
