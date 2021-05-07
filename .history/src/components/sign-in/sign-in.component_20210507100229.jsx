import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwork: "",
    };
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and passwork</span>

        <form>
          <input type="email" name="email" value={this.state.email} required />
          <label>Email</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
