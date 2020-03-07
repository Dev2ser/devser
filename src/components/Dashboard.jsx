import React, { Component } from "react";
import fire from "../config/Fire";
import "bootstrap/dist/css/bootstrap.css";

class Dashboard extends Component {
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    const styles = {
      position: "absolute",
      top: 20,
      right: 20,
      width: "auto",
      height: "auto"
    };
    return (
      <div>
        <h1>Hello Bros!</h1>
        <button class="btn btn-danger" style={styles} onClick={this.logout}>
          Logout!
        </button>
      </div>
    );
  }
}

export default Dashboard;
