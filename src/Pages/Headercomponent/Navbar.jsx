import React from "react";
import Logo from "./Logo";
import Headermenu from './Headermenu';
import "./Headercomponent.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="spotify-headerblock">
      <nav>
        <div className="spotifylogo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="spotifymenu">
          <Headermenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
