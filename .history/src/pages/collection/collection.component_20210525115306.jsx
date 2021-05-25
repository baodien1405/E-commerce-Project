import React from "react";
import { connect } from "react-redux";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId);
  return <div className="collection-page">COLLECTION PAGE</div>;
};

export default CollectionPage;
