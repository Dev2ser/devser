import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SignIn } from '../../components/';
import { Editor } from '../../pages/';

export class EditorRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user ? <Editor /> : <SignIn />}
      </React.Fragment>
    );
  }
}

EditorRoute.propTypes = {
  user: PropTypes.object,
};
