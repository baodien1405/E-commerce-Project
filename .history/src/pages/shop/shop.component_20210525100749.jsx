import React, { Component } from "react";
import CollectionPreview from "./../../components/collection-preview/collection-preview.component";

const ShopPage = () => (
  <div className="shop-page">
    {collections.map(({ id, ...otherColectionprops }) => (
      <CollectionPreview key={id} {...otherColectionprops} />
    ))}
  </div>
);

export default ShopPage;
