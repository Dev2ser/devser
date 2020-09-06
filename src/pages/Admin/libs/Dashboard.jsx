import React, { useEffect } from 'react';
import fire from '../../../config/base';
import { Helmet } from 'react-helmet';
import { Switch } from '../../../components';
import { Logout } from '../../../service/Authentication';

export default function Dashboard() {
  const user = fire.auth().currentUser;

  useEffect(() => {
    require('bootstrap/dist/css/bootstrap.css');
    require('../scss/Dashboard.scss');
  });

  return (
    <div className="align-items-center parent">
      <Helmet>
        <title>Console | Devser</title>
      </Helmet>
      <Switch />
      <h3 className="state">Logged in as {user.displayName}!</h3>
      <button
        data-testid="logout-btn"
        className="btn btn-danger logout"
        onClick={Logout}
      >
        Sign Out!
      </button>
    </div>
  );
}
