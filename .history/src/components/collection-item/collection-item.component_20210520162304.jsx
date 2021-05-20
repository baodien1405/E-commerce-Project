import React from "react";
import CustomButton from "./../../components/custom-button/custom-button.component";

import "./colllection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
};
export default CollectionItem;
