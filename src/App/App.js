import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LogRocket from 'logrocket';
import { auth } from '../config/base';
import { ResetPassword } from '../components';
import { NotFound, Users } from '../pages';
import {
  AccountRoute,
  BaseRoute,
  PrivateRoute,
  SignInRoute,
  SignUpRoute,
  SubjectsRoute,
} from '../routes';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        sessionStorage.setItem('user', user.uid);
        LogRocket.identify(user.uid, {
          name: user.displayName,
          email: user.email,
        });
      } else {
        this.setState({ user: null });
        sessionStorage.removeItem('user');
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
            path={'/'}
            render={(props) => <BaseRoute {...props} user={this.state.user} />}
          />
          <Route
            exact
            path={'/auth/login'}
            render={(props) => (
              <SignInRoute {...props} user={this.state.user} />
            )}
          />
          <Route
            exact
            path={'/auth/signup'}
            render={(props) => (
              <SignUpRoute {...props} user={this.state.user} />
            )}
          />
          <Route
            exact
            path={'/auth/reset-password'}
            component={ResetPassword}
          />
          {/* <Route exact path={'/auth/verify'} component={VerifyEmail} /> */}
          <Route
            exact
            path={'/myaccount'}
            render={(props) => (
              <AccountRoute {...props} user={this.state.user} />
            )}
          />
          <Route
            exact
            path={'/subjects'}
            render={(props) => (
              <SubjectsRoute {...props} user={this.state.user} />
            )}
          />
          {/* <Route exact path={'/users'} component={UsersPanel} /> */}
          <PrivateRoute component={Users} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
