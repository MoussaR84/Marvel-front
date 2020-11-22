import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/img/marvellogo.png";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>

            <button>Login</button>
            <Link to="/characters">
              <li>Characters</li>
            </Link>

            <Link to="/comics">
              <li>Comics</li>
            </Link>
            <Link to="/myfavs">
              <p>My favs</p>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
