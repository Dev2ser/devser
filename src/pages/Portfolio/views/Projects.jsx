import React, { Component } from 'react';

export default class Projects extends Component {
  componentDidMount() {
    require('../scss/Projects.scss');
  }

  render() {
    return <h1>Projects</h1>;
  }
}
