import React, { useState, useEffect } from 'react';
import { Link as Linker } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
  Grow,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { DocHeader } from '../../index';
import { auth } from '../../../config/base';
import './SignIn.scss';

// eslint-disable-next-line
import GoogleIcon from '../../../assets/icons/google.jpg';

// Firebase init
// eslint-disable-next-line
import firebase from 'firebase/app';
// eslint-disable-next-line
import firebaseui from 'firebaseui';

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
    backgroundColor: '#5a67d8',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    color: '#fff',
    backgroundColor: '#667eea',
    '&:hover': {
      backgroundColor: '#5a67d8',
    },
  },
  loginWithGoogle: {
    margin: theme.spacing(0),
    marginTop: theme.spacing(-0.5),
    marginBottom: theme.spacing(2),
    background: '#ecf0f1',
    color: '#000',
    height: '36px',
  },
}));

const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };
const errorMessageStyles = {
  color: 'red',
  textAlign: 'center',
  marginTop: 20,
};

export function SignIn() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailIsError, setEmailIsError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordIsError, setPasswordIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, isError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = () => {
    let isError = false;

    if (email.indexOf('@') === -1) {
      isError = true;
      setEmailIsError(true);
      setEmailError('Requires valid email');
    }
    if (email === '') {
      isError = true;
      setEmailIsError(true);
      setEmailError('Email is required');
    }
    if (password === '') {
      isError = true;
      setPasswordIsError(true);
      setPasswordError('Password is required');
    }
    return isError;
  };

  const login = (e) => {
    e.preventDefault();

    const err = validate();
    if (!err) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((u) => {
          console.log('Current User:', u);
          setEmail('');
          setEmailError('');
          setEmailIsError(false);
          setPassword('');
          setEmailError('');
          setEmailIsError(false);
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

  // const loginWithGoogle = (e) => {
  //   e.preventDefault();
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   auth.signInWithRedirect(provider);

  //   auth
  //     .getRedirectResult()
  //     .then(function (result) {
  //       if (result.credential) {
  //         // This gives you a Google Access Token. You can use it to access the Google API.
  //         var token = result.credential.accessToken;
  //       }
  //       // The signed-in user info.
  //       var user = result.user;
  //       console.log('provider_token: ' + user);
  //     })
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // The email of the user's account used.
  //       var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       var credential = error.credential;
  //       isError(true);
  //       setErrorMessage(errorMessage);
  //     });
  // };

  useEffect(() => {
    require('./SignIn.scss');
  });

  const classes = useStyles();
  return (
    <Grow in={true} mountOnEnter unmountOnExit>
      <Container component="main" maxWidth="xs">
        <DocHeader>Sign-In</DocHeader>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} validate="true">
            <TextField
              value={email}
              onChange={handleEmail}
              error={emailIsError}
              helperText={emailError}
              name="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              autoComplete="email"
              autoFocus
              inputProps={{ style: inputStyle }}
            />
            <TextField
              value={password}
              onChange={handlePassword}
              error={passwordIsError}
              helperText={passwordError}
              name="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              inputProps={{ style: inputStyle }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              className={classes.submit}
              variant="contained"
              fullWidth
              type="submit"
              onClick={login}
            >
              Sign In
            </Button>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.loginWithGoogle}
              onClick={loginWithGoogle}
            >
              <img src={GoogleIcon} alt="google_signin_btn" />
              Sign In With Google
            </Button> */}
            <Grid container>
              <Grid item xs>
                <Linker to="/auth/reset-password" variant="body2">
                  {'Forgot password?'}
                </Linker>
              </Grid>
              <Grid item>
                <Linker to="/auth/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Linker>
              </Grid>
            </Grid>
            {error && <p style={errorMessageStyles}>{errorMessage}</p>}
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Grow>
  );
}
