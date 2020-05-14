import React, { useState } from "react";
import SearchBar from "../navComponents/searchBar/SearchBar";
import Cast from "./Cast";

function HomePage() {
  const [show, setShow] = useState(undefined);

  // console.log(show.id);
  return (
    <div>
      <SearchBar setShow={setShow} />
      <br></br>
      <br></br>
      {show && (
        <div>
          <img
            src={show.image ? show.image.medium : "Image Not found"}
            alt="Image Not found"
          />
          <h1> {show.name ? show.name : "Name Not Found"} </h1>
          <p>{show.rating.average ? show.rating.average : "Rating NotFound"}</p>
        </div>
      )}
      <br />
      {show && <Cast showID={show.id} />}
    </div>
  );
}

export default HomePage;
