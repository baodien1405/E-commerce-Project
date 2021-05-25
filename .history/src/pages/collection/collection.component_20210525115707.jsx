import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "./../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId);
  return <div className="collection-page">COLLECTION PAGE</div>;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection,
});

export default CollectionPage;
