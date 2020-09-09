import React, { Component } from "react";

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "default@wirecard.com",
    };
  }

  componentDidMount() {
    this.setState({ email: "thanhtam.ha@wirecard.com" });
  }

  changeEmail = () => {
    this.setState({ email: "newEmail@wirecard.com" });
  };

  render() {
    return (
      <div>
        <h3>Hello {this.props.name}</h3>
        <h3>Email {this.state.email}</h3>
        <button onClick={this.changeEmail}>Change</button>
      </div>
    );
  }
}
