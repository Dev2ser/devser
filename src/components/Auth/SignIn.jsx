import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grow } from '@material-ui/core';

import { Helmet } from 'react-helmet';
import { Link as Linker } from 'react-router-dom';

// Firebase init
import firebase from 'firebase';
import fire, { analytics } from '../../config/base';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="#">
				Devser
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		paddingTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	loginWithGoogle: {
		width: '396',
		margin: theme.spacing(0.1),
		backgroundColor: '#fff',
		color: '#000'
	}
}));

export default function SignIn() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, isError ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState('');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePass = (e) => {
		setPassword(e.target.value);
	};

	const login = (e) => {
		e.preventDefault();
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((u) => {
				const method = u.credential.signInMethod;
				analytics.logEvent('login', { method });
				console.log('Current User:', u);
				isError(false);
				setErrorMessage('');
			})
			.catch((error) => {
				console.log(error);
				isError(true);
				setErrorMessage(error.message);
			});
	};

	const loginWithGoogle = (e) => {
		e.preventDefault();
		var provider = new firebase.auth.GoogleAuthProvider();
		fire.auth().signInWithRedirect(provider);
		fire
			.auth()
			.getRedirectResult()
			.then(function(result) {
				if (result.credential) {
					// This gives you a Google Access Token. You can use it to access the Google API.
					var token = result.credential.accessToken;
				}
				// The signed-in user info.
				var user = result.user;
				console.log('provider_token: ' + user);
			})
			.catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				isError(true);
				setErrorMessage(errorMessage);
			});
	};

	const classes = useStyles();
	return (
		<Grow in={true} mountOnEnter unmountOnExit>
			<Container component="main" maxWidth="xs">
				<Helmet>
					<title>Sign-In | Devser</title>
				</Helmet>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} validate="true">
						<TextField
							value={email}
							onChange={handleEmail}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							type="email"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							value={password}
							onChange={handlePass}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={login}
						>
							Sign In
						</Button>
						{/* <Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.loginWithGoogle}
							onClick={loginWithGoogle}
						>
							<img src="/images/static/google.jpg" alt="google_signin_btn" />
							Sign In With Google
						</Button> */}
						<Grid container>
							<Grid item xs>
								<Linker to="/reset-password" variant="body2">
									Forgot password?
								</Linker>
							</Grid>
							<Grid item>
								<Linker to="/signup" variant="body2">
									{"Don't have an account? Sign Up"}
								</Linker>
							</Grid>
						</Grid>
						{error && <p style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>{errorMessage}</p>}
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Container>
		</Grow>
	);
}
