import React from 'react';
import PropTypes from 'prop-types';
import { Logout } from '../services/Authentication';

export function NavItem(props) {
  const { obj } = props;
  const { name, href } = obj;
  const className = props.mobile
    ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline'
    : 'ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline';
  return (
    <a href={href} className={className}>
      {name}
    </a>
  );
}

export function ActionItem(props) {
  const { obj } = props;
  const { name, href } = obj;
  const className = props.mobile
    ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-400 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline z-50'
    : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline hover:no-underline z-50';
  const action = props.obj.action === 'Logout' ? Logout : null;
  return (
    <a href={href} className={className} onClick={action}>
      {name}
    </a>
  );
}

NavItem.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  mobile: PropTypes.bool,
};

ActionItem.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    action: PropTypes.string,
  }),
  mobile: PropTypes.bool,
};
