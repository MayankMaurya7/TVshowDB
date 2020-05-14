import React from "react";

function Test(props) {
  return (
    <div>
      Hi {props.name} please {props.children}
    </div>
  );
}

export default Test;
