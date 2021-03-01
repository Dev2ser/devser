import React from 'react';
import PropTypes from 'prop-types';
import LogoIcon from '../assets/icons/logo.svg';

export function Logo(props) {
  const { className } = props;

  return <img className={className} src={LogoIcon} alt="Devser logo" />;
}

Logo.propTypes = {
  className: PropTypes.string,
};
