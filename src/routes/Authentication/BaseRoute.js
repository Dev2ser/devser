import React, { Component } from 'react';
// Temporary
// eslint-disable-next-line
import Admin from '../../pages/Admin';
import { Portfolio } from '../../pages/';
import { Redirect } from 'react-router-dom';

export class BaseRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user ? <Portfolio /> : <Redirect to="/auth/login" />}
      </React.Fragment>
    );
  }
}
