import React from "react";
import "./style.css";



export function Container({ children }) {
  return <ul className="container">{children}</ul>;
}

export function Card(props) {

  return (
    <div className="card">
      <img src={props.sprite} alt={props.name} Key={props.id} onClick={props.buttonClick} />
    </div>
  );
}
