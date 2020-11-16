import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { SignIn } from '../../components';

export class SignInRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user ? <Redirect to="/" /> : <SignIn />}
      </React.Fragment>
    );
  }
}
