import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";
import AdminPanel from "./components/AdminPanel/Admin";
import SignIn from "./components/AuthComp/SignIn";
import SignUp from "./components/AuthComp/SignUp";
import Dashboard from "./components/ui/dashboard/Dashboard";
import NotFound from "./components/pages/NotFound";
import Switcher from "./components/themes/Switch";
import { Route, Switch } from "react-router-dom";
import SigninRoute from "./components/utils/SigninRoute";
import SignupRoute from "./components/utils/SignupRoute";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
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
        </Switch>
        <Switcher />
      </div>
    );
  }
}
