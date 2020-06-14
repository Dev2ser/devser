import React, { Component } from 'react';
import { SignUp } from '../Auth';
import { Redirect } from 'react-router-dom';

export default class SignupRoute extends Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props);
	}

	render() {
		return <div>{this.props.user ? <Redirect to="/" /> : <SignUp />}</div>;
	}
}
