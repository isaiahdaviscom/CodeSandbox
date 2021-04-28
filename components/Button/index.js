import React from "react";
import "../../styles/styles.css";

function Button(props) {
  const action = { prev: -1, next: 1 };
  console.log(props);
  return (
    <>
      <button className="button">Prevous</button>
    </>
  );
}

export default Button;
