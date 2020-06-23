import React, { Component } from 'react';
import { ResetPass } from '../../components';
import { Redirect } from 'react-router-dom';

export default class ResetRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.user ? <ResetPass /> : <Redirect to="/" />}</div>;
  }
}
