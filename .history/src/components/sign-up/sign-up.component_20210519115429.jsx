import React, { Component } from "react";
import FormInput from "./../../components/form-input/form-input.component";
import CustomButton from "./../../components/custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return <div></div>;
  }
}

export default SignUp;
