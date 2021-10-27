import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import PageNotFound from '../../assets/images/PageNotFound.png';
import { SEO, GoBack } from '../../components';

const containerStyles = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

const contentStyles = {
  textAlign: 'center',
  margin: 0,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const NotFound = ({ location }) => (
  <div style={containerStyles}>
    <SEO title="NotFound"/>

    {/* <img
      alt="404"
      src={PageNotFound}
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: 400,
        display: 'block',
        margin: 'auto',
        position: 'relative',
      }}
    /> */}
    <div style={contentStyles}>
      <p
        style={{
          fontSize: 32,
        }}
      >
        Sorry but <b>{location.pathname}</b> didn’t match any pages.
      </p>
      <GoBack />
    </div>
  </div>
);

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
