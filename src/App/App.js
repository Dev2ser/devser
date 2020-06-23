import React, { Component } from 'react';
import './App.css';
import fire from '../config/base';
import { Route, Switch } from 'react-router-dom';
import { SigninRoute } from '../routes';
import { SignupRoute } from '../routes';
import { ResetpassRoute } from '../routes';
// eslint-disable-next-line
import { PrivateRoute } from '../routes/PrivateRoute';

import NotFound from '../pages/NotFound';
// import pdfViewer from '../pages/PDFViewer';
// import { HomePage } from './components/pages/UI';

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
        sessionStorage.setItem('user', user.uid);
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
            render={(props) => (
              <SigninRoute {...props} user={this.state.user} />
            )}
          />
          <Route
            exact
            path={'/signup'}
            render={(props) => (
              <SignupRoute {...props} user={this.state.user} />
            )}
          />
          <Route
            exact
            path={'/reset-password'}
            render={(props) => (
              <ResetpassRoute {...props} user={this.state.user} />
            )}
          />
          {/* <Route exact path={'/pdf'} component={pdfViewer} /> */}
          {/* <Route exact path={'/home'} component={HomePage} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
