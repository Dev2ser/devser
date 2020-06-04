import React, { Component } from "react";
import AdminPanel from "../Admin";
import SignIn from "../Auth/SignIn";

export default class SigninRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.user ? <AdminPanel/> : <SignIn />}</div>;
  }
}
