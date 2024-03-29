import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    render: PropTypes.func.isRequired,
  };

  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });

    // // if we have Bugsnag in this environment, we can notify our error tracker
    // if (window.Bugsnag) {
    // 	window.Bugsnag.notify(error);
    // }
  }

  render() {
    if (this.state.hasError) {
      return this.props.render(this.state.error, this.state.errorInfo);
    }
    return this.props.children;
  }
}
