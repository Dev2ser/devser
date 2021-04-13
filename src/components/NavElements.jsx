import React from 'react';
import PropTypes from 'prop-types';
import { Logout } from '../service/Authentication';

export function NavItem(props) {
  const { obj } = props;
  const { text, link } = obj;
  const className = props.mobile
    ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline'
    : 'ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline';
  return (
    <a href={link} className={className}>
      {text}
    </a>
  );
}

export function ActionItem(props) {
  const { obj } = props;
  const { text, link } = obj;
  const className = props.mobile
    ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-400 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline'
    : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline hover:no-underline';

  const action = props.obj.action === 'Logout' ? Logout : null;
  return (
    <a href={link} className={className} onClick={action}>
      {text}
    </a>
  );
}

NavItem.propTypes = {
  obj: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  mobile: PropTypes.bool,
};

ActionItem.propTypes = {
  obj: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    action: PropTypes.string,
  }),
  mobile: PropTypes.bool,
};
