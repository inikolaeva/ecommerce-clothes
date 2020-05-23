import React from "react";

import "./navCard.styles.scss";

const NavCard = ({ title, linkUrl, size, imageUrl }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <a className="subtitle" href={linkUrl}>
          SHOP NOW
        </a>
      </div>
    </div>
  );
};

export default NavCard;
