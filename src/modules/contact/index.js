import React, { Component } from "react";

import images from "../../assets";
import NavMenu from "../../components/menu";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavMenu></NavMenu>

        <div>
          <img
            src={images.logo}
            alt="logo"
            style={{ width: "60px", height: "auto" }}
          />{" "}
          Contact Page
        </div>
      </React.Fragment>
    );
  }
}
