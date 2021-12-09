import React from "react";
import Logo from "./Logo";
import Headermenu from './Headermenu';
import "./Headercomponent.css"

const Navbar = () => {
  return (
    <header id="spotify-headerblock">
      <nav>
        <div className="spotifylogo">
          <Logo />
        </div>

        <div className="spotifymenu">
          <Headermenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
