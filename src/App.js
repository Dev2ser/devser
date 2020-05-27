import React, { Component } from "react";
import "./App.css";
import fire from "./config/base";
// eslint-disable-next-line
import Dashboard from "./components/ui/dashboard/Dashboard";
import NotFound from "./components/pages/NotFound/";
import UserController from "./components/ui/user-control/UserController";
import SlideView from "./components/SlideView";
import Switcher from "./components/themes/Switch";
import { Route, Switch } from "react-router-dom";
import SigninRoute from "./components/routes/SigninRoute";
import SignupRoute from "./components/routes/SignupRoute";
import ResetRoute from "./components/routes/ResetRoute";
import { PrivateRoute } from "./components/routes/PrivateRoute";

import pdfViewer from "./components/pages/PDFViewer/";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        sessionStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        sessionStorage.removeItem("user");
      }
    });
  };

  componentDidMount() {
    this.authListener();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props) => (
              <SigninRoute {...props} user={this.state.user} />
            )}
          />
          <Route
            exact
            path={"/signup"}
            render={(props) => (
              <SignupRoute {...props} user={this.state.user} />
            )}
          />
          <PrivateRoute exact path={"/users"} component={UserController} />
          <Route
            exact
            path={"/reset-password"}
            render={(props) => <ResetRoute {...props} user={this.state.user} />}
          />
          <Route exact path={"/slide"} component={SlideView} />
          <Route exact path={"/pdf"} component={pdfViewer} />
          <Route component={NotFound} />
        </Switch>
        <Switcher />
      </div>
    );
  }
}
