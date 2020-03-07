import React, { Component } from "react";
import fire from "../config/Fire";
import "./style/Registration.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div class="login-container">
        <section class="login" id="login">
          <header>
            <h2>Registration</h2>
            <h4>Lemon-it</h4>
          </header>
          <form class="login-form">
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="login-input"
              id="email"
              placeholder="E-mail"
              required
              autofocus
            />
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              class="login-input"
              id="password"
              placeholder="Password"
              required
            />
            <div class="submit-container">
              <button type="submit" onClick={this.login} class="login-button">
                SIGN IN
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default Login;
