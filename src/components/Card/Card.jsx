import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card" style={{backgroundImage:'url(https://images.unsplash.com/photo-1584448097764-374f81551427?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
      <img
        src="https://images.unsplash.com/photo-1584448097764-374f81551427?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}

export default Card;
