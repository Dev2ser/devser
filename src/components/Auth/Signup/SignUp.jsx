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

import { DocHeader } from '../../';
import { Link as Linker } from 'react-router-dom';

// Firebase init
import { db, auth } from '../../../config/base';
import { getUser } from '../../../service/Authentication';

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
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function SignUp() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [usernameisError, setUsernameisError] = useState(false);
  const [fname, setFname] = useState('');
  const [fnameError, setFnameError] = useState('');
  const [fnameisError, setFnameisError] = useState(false);
  const [lname, setLname] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [lnameisError, setLnameisError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailisError, setEmailisError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordisError, setPasswordisError] = useState(false);
  const [error, isError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // eslint-disable-next-line
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const handleUsername = (e) => {
    setUsername(e.target.value);

    if (username.length >= 0) {
      setUsernameisError(false);
      setUsernameError('');
    }
  };
  const handleFname = (e) => {
    setFname(e.target.value);

    if (fname.length >= 0) {
      setFnameisError(false);
      setFnameError('');
    }
  };
  const handleLname = (e) => {
    setLname(e.target.value);

    if (lname.length >= 0) {
      setLnameisError(false);
      setLnameError('');
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (email.length >= 0) {
      setEmailisError(false);
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    if (password.length >= 0) {
      setPasswordisError(false);
      setPasswordError('');
    }
  };

  const validate = () => {
    let isError = false;

    if (username.length < 5) {
      isError = true;
      setUsernameisError(true);
      setUsernameError('Username must be atleast 5 characters long');
    }
    if (username === '') {
      isError = true;
      setUsernameisError(true);
      setUsernameError('Username is required');
    }
    if (format.test(fname)) {
      isError = true;
      setFnameisError(true);
      setFnameError('Only use A-Z 0-9');
    }
    if (fname === '') {
      isError = true;
      setFnameisError(true);
      setFnameError('First name is required');
    }
    if (format.test(lname)) {
      isError = true;
      setLnameisError(true);
      setLnameError('Only use A-Z 0-9');
    }
    if (lname === '') {
      isError = true;
      setLnameisError(true);
      setLnameError('Last name is required');
    }
    if (email.indexOf('@') === -1) {
      isError = true;
      setEmailisError(true);
      setEmailError('Requires valid email');
    }
    if (email === '') {
      isError = true;
      setEmailisError(true);
      setEmailError('Email is required');
    }
    if (password.length < 6) {
      isError = true;
      setPasswordisError(true);
      setPasswordError('Password must be atleast 6 characters long');
    }
    if (password === '') {
      isError = true;
      setPasswordisError(true);
      setPasswordError('Password is required');
    }
    return isError;
  };

  const signup = (e) => {
    e.preventDefault();

    const err = validate();
    if (!err) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((u) => {
          const user = getUser();
          user.sendEmailVerification();
          return db.collection('users').doc(u.user.uid).set({
            username: username,
            firstName: fname,
            lastName: lname,
            email: email,
            password: password,
            created_on: new Date(),
          });
        })
        .then((u) => {
          setUsername('');
          setUsernameError('');
          setUsernameisError(false);
          setFname('');
          setFnameError('');
          setFnameisError(false);
          setLname('');
          setLnameError('');
          setLnameisError(false);
          setEmail('');
          setEmailError('');
          setEmailisError(false);
          setPassword('');
          setPasswordError('');
          setPasswordisError(false);
          console.log(
            'Successfully Created The User With The Following Credentials:',
            u
          );
          isError(false);
          setErrorMessage('');
        })
        .catch((error) => {
          console.log(error);
          isError(true);
          setErrorMessage(error.message);
        });
    }
  };

  const classes = useStyles();
  return (
    <Grow in={true} mountOnEnter unmountOnExit>
      <Container component="main" maxWidth="xs">
        <DocHeader>Sign-Up</DocHeader>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate name="signupForm">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={username}
                  onChange={handleUsername}
                  error={usernameisError}
                  helperText={usernameError}
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  type="text"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={fname}
                  onChange={handleFname}
                  error={fnameisError}
                  helperText={fnameError}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lname}
                  onChange={handleLname}
                  error={lnameisError}
                  helperText={lnameError}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={handleEmail}
                  error={emailisError}
                  helperText={emailError}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={handlePassword}
                  error={passwordisError}
                  helperText={passwordError}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signup}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Linker to="/auth/login" className="link">
                  {'Already have an account? Sign in'}
                </Linker>
              </Grid>
            </Grid>
            {error && (
              <p
                style={{
                  color: 'red',
                  textAlign: 'center',
                  marginTop: 20,
                  marginBottom: 5,
                }}
              >
                {errorMessage}
              </p>
            )}
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Grow>
  );
}
