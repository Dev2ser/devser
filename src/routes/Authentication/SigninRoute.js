import React, { Component } from 'react';
// Temporary
import Admin from '../../pages/Admin';
import { SignIn } from '../../components';

export default class SigninRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user ? <Admin /> : <SignIn />}
      </React.Fragment>
    );
  }
}
