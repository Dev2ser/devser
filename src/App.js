import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";
// eslint-disable-next-line
import AdminPanel from "./components/AdminPanel/Admin";
// eslint-disable-next-line
import SignIn from "./components/AuthComp/SignIn";
// eslint-disable-next-line
import SignUp from "./components/AuthComp/SignUp";
// eslint-disable-next-line
import Dashboard from "./components/ui/dashboard/Dashboard";
import NotFound from "./components/pages/NotFound";
import Switcher from "./components/themes/Switch";
import { Route, Switch } from "react-router-dom";
import SigninRoute from "./components/routes/SigninRoute";
import SignupRoute from "./components/routes/SignupRoute";
import ResetRoute from "./components/routes/ResetRoute";
import UserController from "./components/ui/user-control/UserController";
import { PrivateRoute } from "./components/routes/PrivateRoute";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
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
            render={props => <SigninRoute {...props} user={this.state.user} />}
          />
          <Route
            exact
            path={"/signup"}
            render={props => <SignupRoute {...props} user={this.state.user} />}
          />
          <PrivateRoute exact path={"/users"} component={UserController} />
          <Route
            exact
            path={"/reset-password"}
            render={props => <ResetRoute {...props} user={this.state.user} />}
          />
          <Route component={NotFound} />
        </Switch>
        <Switcher />
      </div>
    );
  }
}
