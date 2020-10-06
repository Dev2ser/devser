import React, { useEffect } from 'react';
import { DocHeader } from '../../../components';
import { Switch } from '../../../components';
import { Logout, getUser } from '../../../service/Authentication';

export default function Dashboard() {
  const user = getUser();

  useEffect(() => {
    require('bootstrap/dist/css/bootstrap.css');
    require('../scss/Dashboard.scss');
  });

  return (
    <div className="align-items-center parent">
      <DocHeader>Dashboard</DocHeader>
      <Switch />
      <h3 className="state">Logged in as {user.email}!</h3>
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
