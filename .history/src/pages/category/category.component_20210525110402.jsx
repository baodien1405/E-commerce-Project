import React from "react";

import "./category.styles.scss";

const CategoryPage = ({ match }) => {
  console.log(match.params.categoryId);
  return <div className="category">CATEGORY PAGE</div>;
};

export default CategoryPage;
