import React from 'react';
import { SEO, GoBack } from '../../../components';
import { capitalizeFirstLetter } from '../../../services/Helpers';

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

export const Chemistry = ({ location }) => {
  const title =
    capitalizeFirstLetter(location.pathname.split(/[//]/)[1]) + ' - Chemistry';

  return (
    <div style={containerStyles}>
      <SEO title={title} />
      <div style={contentStyles}>
        <p
          style={{
            fontSize: 32,
          }}
        >
          Current Path: Chemistry.
        </p>
        <GoBack />
      </div>
    </div>
  );
};
