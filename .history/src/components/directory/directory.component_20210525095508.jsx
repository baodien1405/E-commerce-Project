import React from "react";
import { connect } from "react-redux";
import MenuItem from "./../menu-item/menu-item.component";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "./../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = () => (
  <div className="directory-menu">
    {this.state.sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections(),
});

export default connect(mapStateToProps)(Directory);