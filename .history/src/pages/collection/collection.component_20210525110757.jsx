import React from "react";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId);
  return <div className="collection-page">COLLECTION PAGE</div>;
};

export default CollectionPage;
