import React from 'react';
import LogoIcon from '../assets/icons/logo.svg';

export function Logo(props) {
  const { className, src = LogoIcon } = props;

  return <img className={className} src={src} alt="Devser logo" />;
}
