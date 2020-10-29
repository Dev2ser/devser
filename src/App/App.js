import React, { Component } from 'react';
import './App.css';
import { auth } from '../config/base';
import { Route, Switch } from 'react-router-dom';
import { BaseRoute } from '../routes';
import { SignInRoute } from '../routes';
import { SignUpRoute } from '../routes';
import { AccountRoute } from '../routes';
import { SubjectsRoute } from '../routes';
// eslint-disable-next-line
import { PrivateRoute } from '../routes';
import { ResetPassword } from '../components';
import { Users } from '../pages';
import { NotFound } from '../pages';
import LogRocket from 'logrocket';

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
