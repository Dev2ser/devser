import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserController extends Component {
  state = {};
  render() {
    return (
      <div>
        <center>
          <p
            style={{
              fontSize: 32
            }}
          >
            Users
          </p>
          <Link to="/">Go Back</Link>
        </center>
      </div>
    );
  }
}
