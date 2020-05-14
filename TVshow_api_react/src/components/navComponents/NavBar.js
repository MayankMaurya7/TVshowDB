import React from "react";
import "./NavBar.css";
import HomePage from "../homepage/HomePage";

function NavBar() {
  return (
    <div className="navContainer">
      <nav className="navElements">
        <a href="#">TVshowDB</a>
        <HomePage />
        <a href="#">ShowWatchList</a>
      </nav>
    </div>
  );
}

export default NavBar;
