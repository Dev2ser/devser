import React from 'react';

export default class Projects extends React.Component {
  componentDidMount() {
    require('../scss/Projects.scss');
  }

  render() {
    return <h1>Projects</h1>;
  }
}
