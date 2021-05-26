import React, { Component } from "react";
import Directory from "./../../components/directory/directory.component";
import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styles";
class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
  }
}

export default HomePage;
