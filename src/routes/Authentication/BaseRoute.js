import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Portfolio } from '../../pages/';

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
