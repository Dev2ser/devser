import React from 'react';
import fire from '../../config/base';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Helmet } from 'react-helmet';
import Switcher from '../themes/Switch';
import logout from '../scripts/authLogout';

function AdminPanel() {
	const user = fire.auth().currentUser;

	return (
		<div className="align-items-center parent">
			<Helmet>
				<title>Console | Devser</title>
			</Helmet>
			<Switcher />
			<h3 className="state">Logged in as {user.email}!</h3>
			<button data-testid="logout-btn" className="btn btn-danger logout" onClick={logout}>
				Sign Out!
			</button>
		</div>
	);
}
export default AdminPanel;
