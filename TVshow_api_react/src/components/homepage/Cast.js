import React, { useState } from "react";
import "./Cast.css";

function Cast(props) {
  const [showcast, setCast] = useState(undefined);

  const HandleCastButton = () => {
    fetch(`http://api.tvmaze.com/shows/${props.showID}?embed=cast`)
      .then((res) => res.json())
      .then((res) => {
        setCast(res);
        // console.log(res);
      });
  };

  console.log(showcast);

  return (
    <div>
      <button onClick={HandleCastButton}> Show Cast </button>
      {showcast && (
        <div>
          {showcast._embedded.cast.map((e) => (
            <ul id="cast">
              <li className="li_cast">
                <p>{e.person.name}</p>{" "}
                {
                  <img
                    id="image_cast"
                    src={
                      e.person.image.medium
                        ? e.person.image.medium
                        : "Image Not found"
                    }
                    alt="Image Not found"
                  />
                }{" "}
              </li>
            </ul>
          ))}
          {/* <img
            src={
              showcast._embedded.cast.person.image.medium
                ? showcast._embedded.cast.person.image.medium
                : "Image Not found"
            }
            alt="Image Not found"
          /> */}
        </div>
      )}
    </div>
  );
}

export default Cast;
