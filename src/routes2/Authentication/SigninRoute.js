import React, { Component } from 'react';
import { SignIn } from '../../components';
import { Redirect } from 'react-router-dom';

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
