import React from 'react';
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

export const Projects = ({ location }) => {
  const title = 'Projects';
  return (
    <div style={containerStyles}>
      <SEO title={title} />
      <div style={contentStyles}>
        <p
          style={{
            fontSize: 32,
            color: 'black',
          }}
        >
          {location.pathname}
        </p>
        <GoBack />
      </div>
    </div>
  );
};
