import React, { Component } from 'react';
import { SignIn } from '../../components/';
import { Account } from '../../pages/';

export class AccountRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user ? <Account /> : <SignIn />}
      </React.Fragment>
    );
  }
}
