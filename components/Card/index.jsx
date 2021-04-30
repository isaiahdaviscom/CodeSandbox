import React from "react";

function Card(props) {
  const x = props.props;
  console.log(x)
  return (
    <div className="card">
      <img src={x.imgURL} alt={x.title} style={{ textAlign: "center" }} />
      <h1>{x.title}</h1>
      <p>{x.desc}</p>
    </div>
  );
}

export default Card;
