import React from "react";
import "./menu-item.styles.scss";

function MenuItem({ title, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
