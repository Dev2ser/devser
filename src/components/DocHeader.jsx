import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export function DocHeader(props) {
  return (
    <Helmet>
      <title>
        {`${props.children ? props.children + ' | Devser' : 'Devser'}`}
      </title>
    </Helmet>
  );
}

DocHeader.propTypes = {
  children: PropTypes.string,
};
