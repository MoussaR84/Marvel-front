import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <p>Logo</p>
      </Link>
      <input />
      <button>Login</button>
      <p>Character</p>
      <p>Comics</p>
      <p>My favs</p>
    </>
  );
};

export default Header;
