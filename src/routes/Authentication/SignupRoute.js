import React, { Component } from 'react';
import { SignUp } from '../../components';
import { Redirect } from 'react-router-dom';

export class SignUpRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.user ? <Redirect to="/" /> : <SignUp />}
      </React.Fragment>
    );
  }
}
