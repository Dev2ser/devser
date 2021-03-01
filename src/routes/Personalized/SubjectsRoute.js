import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SignIn } from '../../components';
import { Subjects } from '../../pages/';

export class SubjectsRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user ? <Subjects /> : <SignIn />}
      </React.Fragment>
    );
  }
}

SubjectsRoute.propTypes = {
  user: PropTypes.object,
};
