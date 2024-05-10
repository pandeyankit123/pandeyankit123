import React from "react";
import "./cp-card.css";

function CpCard({ item }) {
  return (<div className="cp-card">
      <a className="platform-link" href={item.link}>
      <div className="platform-name">{item.platform}</div>
        <img src={item.icon} className="platform-photo"/>
      <div className="platform-handle">{item.handle}</div>
      </a>
  </div>);
}

export default CpCard;