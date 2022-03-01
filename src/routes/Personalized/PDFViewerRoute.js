import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SignIn } from '../../components/';
import { PDFViewer } from '../../pages/';

export class PDFViewerRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user ? <PDFViewer /> : <SignIn />}
      </React.Fragment>
    );
  }
}

PDFViewerRoute.propTypes = {
  user: PropTypes.object,
};
