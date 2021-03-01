import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  location: PropTypes.string,
  component: PropTypes.elementType,
};
