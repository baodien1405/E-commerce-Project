import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "./../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "./../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherColectionprops }) => (
      <CollectionPreview key={id} {...otherColectionprops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
