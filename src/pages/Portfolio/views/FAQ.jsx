import React, { Component } from 'react';

export default class FAQ extends Component {
  componentDidMount() {
    require('../scss/FAQ.scss');
  }

  render() {
    return <h1>FAQ</h1>;
  }
}
