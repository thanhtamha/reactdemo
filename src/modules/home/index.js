import React, { Component } from "react";

import images from "../../assets";
import NavMenu from "../../components/menu";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavMenu></NavMenu>

        <div style={{ marginBottom: "1em" }}>
          <img
            src={images.logo}
            alt="logo"
            style={{ width: "60px", height: "auto" }}
          />{" "}
          Home Page
        </div>
      </React.Fragment>
    );
  }
}
