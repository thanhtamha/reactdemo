import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Login from "./modules/login";
import Home from "./modules/home";
import Contact from "./modules/contact";

// import ApiService from "./configs/service";

// import Hello from "./components/hello";
// import Hello2 from "./components/hello2";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Sample API call
    // let demourl = "https://reactnative.dev/movies.json";
    // ApiService.send(demourl, {})
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <Router>
        {/* <Hello name="Class Component"></Hello>
        <Hello2 name="Functional Component"></Hello2> */}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}
