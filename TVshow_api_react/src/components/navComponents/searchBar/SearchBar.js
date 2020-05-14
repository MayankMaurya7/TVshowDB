import React, { useState } from "react";
import "./SearchBar.css";
// import axios from "axios";

function SearchBar(props) {
  const [value, setValue] = useState("");

  const HandleClick = () => {
    console.log(value);
    fetch(`http://api.tvmaze.com/singlesearch/shows?q=${value}`)
      .then((res) => res.json())
      .then((res) => props.setShow(res));
  };

  return (
    <ul>
      <li id="input">
        <input
          onChange={(e) => setValue(e.target.value)}
          id="searchShow"
          type="text"
          placeholder="Search TVshowDB"
          name="search"
        ></input>
      </li>
      <li>
        <button onClick={HandleClick} id="button_search" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </li>
    </ul>
  );
}

export default SearchBar;
