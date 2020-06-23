import React from 'react';
import fire from '../../../config/base';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/Dashboard.scss';
import { Helmet } from 'react-helmet';
import { Switch } from '../../../components';
import { Logout } from '../../../service/Authentication';

function AdminPanel() {
  const user = fire.auth().currentUser;

  return (
    <div className="align-items-center parent">
      <Helmet>
        <title>Console | Devser</title>
      </Helmet>
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
export default AdminPanel;
