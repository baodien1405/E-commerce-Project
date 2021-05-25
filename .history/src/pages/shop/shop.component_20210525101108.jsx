import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./../../components/collection-preview/collection-preview.component";
import { selectShopItems } from "./../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherColectionprops }) => (
      <CollectionPreview key={id} {...otherColectionprops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);
