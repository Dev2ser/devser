import React from 'react';
import PageNotFound from '../../assets/images/PageNotFound.png';
import { Link } from 'react-router-dom';
import { DocHeader } from '../../components';

export const NotFound = () => (
  <div>
    <DocHeader>NotFound</DocHeader>

    <img
      alt="WTF Dont You See??! Of Course It's A Fucking 404 Page You Fucking Idiot"
      src={PageNotFound}
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: 400,
        display: 'block',
        margin: 'auto',
        position: 'relative',
      }}
    />

    <center>
      <p
        style={{
          fontSize: 32,
        }}
      >
        Page Not Found
      </p>
      <Link to="/">Go back</Link>
    </center>
  </div>
);
