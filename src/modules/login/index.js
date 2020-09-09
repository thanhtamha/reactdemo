import React, { Component } from "react";

import images from "../../assets";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doLogin = () => {
    console.log("Do Login. xxxxxxxx");

    this.props.history.push("/home");
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ marginBottom: "1em" }}>
          <img
            src={images.logo}
            alt="logo"
            style={{ width: "60px", height: "auto" }}
          />{" "}
          Login Page
        </div>

        <div className="input-group mb-3" style={{ marginBottom: "1em" }}>
          <input
            className="form-control"
            name="encryptUserID"
            type="text"
            maxLength="50"
            placeholder="Username"
          />
        </div>

        <div className="input-group mb-3" style={{ marginBottom: "1em" }}>
          <input
            className="form-control"
            name="encryptPswd"
            type="password"
            maxLength="50"
            placeholder="Your Password"
          />
        </div>

        <button
          style={{ width: "auto" }}
          type="button"
          className="btn btnPrimary"
          onClick={this.doLogin}
        >
          Login
        </button>
      </React.Fragment>
    );
  }
}
