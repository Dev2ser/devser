import React from 'react';

export default class FAQ extends React.Component {
  componentDidMount() {
    require('../scss/FAQ.scss');
  }

  render() {
    return <h1>FAQ</h1>;
  }
}
