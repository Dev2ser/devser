import React, { useState } from 'react';
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
  // OutlinedInput,
  // InputLabel,
  // FormControl,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { SEO } from '../../index';
import { db, auth } from '../../../config/base';
import { getUser } from '../../../services/Authentication';
import './SignUp.scss';

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
    backgroundColor: '#667eea',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
    backgroundColor: '#667eea',
    '&:hover': {
      backgroundColor: '#5a67d8',
    },
  },
}));

const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };
const errorMessageStyles = {
  color: 'red',
  textAlign: 'center',
  marginTop: 20,
};

export function SignUp() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [usernameIsError, setUsernameIsError] = useState(false);
  const [fname, setFname] = useState('');
  const [fnameError, setFnameError] = useState('');
  const [fnameIsError, setFnameIsError] = useState(false);
  const [lname, setLname] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [lnameIsError, setLnameIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailIsError, setEmailIsError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordIsError, setPasswordIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, isError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // TODO: extract to validation function!
  // eslint-disable-next-line
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const handleUsername = (e) => {
    setUsername(e.target.value);

    if (username.length >= 0) {
      setUsernameIsError(false);
      setUsernameError('');
    }
  };
  const handleFname = (e) => {
    setFname(e.target.value);

    if (fname.length >= 0) {
      setFnameIsError(false);
      setFnameError('');
    }
  };
  const handleLname = (e) => {
    setLname(e.target.value);

    if (lname.length >= 0) {
      setLnameIsError(false);
      setLnameError('');
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (email.length >= 0) {
      setEmailIsError(false);
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    if (password.length >= 0) {
      setPasswordIsError(false);
      setPasswordError('');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = () => {
    let isError = false;

    if (username.length < 5) {
      isError = true;
      setUsernameIsError(true);
      setUsernameError('Username must be atleast 5 characters long');
    }
    if (username === '') {
      isError = true;
      setUsernameIsError(true);
      setUsernameError('Username is required');
    }
    if (format.test(fname)) {
      isError = true;
      setFnameIsError(true);
      setFnameError('Only use A-Z 0-9');
    }
    if (fname === '') {
      isError = true;
      setFnameIsError(true);
      setFnameError('First name is required');
    }
    if (format.test(lname)) {
      isError = true;
      setLnameIsError(true);
      setLnameError('Only use A-Z 0-9');
    }
    if (lname === '') {
      isError = true;
      setLnameIsError(true);
      setLnameError('Last name is required');
    }
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
    if (password.length < 6) {
      isError = true;
      setPasswordIsError(true);
      setPasswordError('Password must be atleast 6 characters long');
    }
    if (password === '') {
      isError = true;
      setPasswordIsError(true);
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
            uid: user.uid,
            username: username,
            firstName: fname,
            lastName: lname,
            email: email,
            isVerified: false,
            created_on: u.user.metadata.creationTime,
            numberOfSubjects: 0,
          });
        })
        .then((u) => {
          setUsername('');
          setUsernameError('');
          setUsernameIsError(false);
          setFname('');
          setFnameError('');
          setFnameIsError(false);
          setLname('');
          setLnameError('');
          setLnameIsError(false);
          setEmail('');
          setEmailError('');
          setEmailIsError(false);
          setPassword('');
          setPasswordError('');
          setPasswordIsError(false);
          isError(false);
          setErrorMessage('');
          console.log(
            'Successfully Created The User With The Following Credentials:',
            u
          );
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
        <SEO title="Sign-Up" />
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
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
                  error={usernameIsError}
                  helperText={usernameError}
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  type="text"
                  autoComplete="username"
                  autoFocus
                  inputProps={{ style: inputStyle }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={fname}
                  onChange={handleFname}
                  error={fnameIsError}
                  helperText={fnameError}
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  type="text"
                  autoComplete="given-name"
                  inputProps={{ style: inputStyle }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lname}
                  onChange={handleLname}
                  error={lnameIsError}
                  helperText={lnameError}
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  type="text"
                  autoComplete="family-name"
                  inputProps={{ style: inputStyle }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={handleEmail}
                  error={emailIsError}
                  helperText={emailError}
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  inputProps={{ style: inputStyle }}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControl variant="outlined" fullWidth>
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    required
                    error={passwordIsError}
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    label="Password"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePassword}
                    autoComplete="new-password"
                    endAdornment={
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
                    }
                    labelWidth={100}
                  />
                </FormControl> */}
                <TextField
                  value={password}
                  onChange={handlePassword}
                  error={passwordIsError}
                  helperText={passwordError}
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
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
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              variant="contained"
              fullWidth
              type="submit"
              onClick={signup}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Linker to="/auth/login" variant="body2">
                  {'Already have an account? Sign in'}
                </Linker>
              </Grid>
            </Grid>
            {error && <p style={errorMessageStyles}>{errorMessage}</p>}
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Grow>
  );
}
