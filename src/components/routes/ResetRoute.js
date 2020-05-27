import React, { Component } from "react";
import ResetPass from "../Auth/ResetPass";
import { Redirect } from "react-router-dom";

export default class RouteAuth extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.user ? <Redirect to="/" /> : <ResetPass />}</div>;
  }
}
