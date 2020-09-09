import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Ref: https://www.w3schools.com/css/css_navbar_horizontal.asp

  render() {
    return (
      <ul>
        <li>
          <Link className="active" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    );
  }
}
