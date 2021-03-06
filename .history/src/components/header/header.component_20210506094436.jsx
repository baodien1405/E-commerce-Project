import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import "./header.styles.scss";

const Header = (props) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
    </div>
  );
};

export default Header;
