import React, { Component } from "react";
import Header from "../../components/header/header.component";
import Directory from "./../../components/directory/directory.component";
import "./homepage.styles.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
