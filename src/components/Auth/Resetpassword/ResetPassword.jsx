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
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { DocHeader } from '../../index';
import { auth } from '../../../config/base';
import './ResetPassword.scss';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
    backgroundColor: '#667eea',
    '&:hover': {
      backgroundColor: '#5a67d8',
    },
  },
  loginWithGoogle: {
    width: '396',
    margin: theme.spacing(0.1),
    backgroundColor: '#fff',
    color: '#000',
  },
}));

export function ResetPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailIsError, setEmailIsError] = useState(false);
  const [error, isError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (email.length >= 0) {
      setEmailIsError(false);
      setEmailError('');
    }
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

    return isError;
  };

  const sendResetEmail = (event) => {
    event.preventDefault();

    const err = validate();
    if (!err) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          setEmail('');
          setEmailError('');
          setEmailIsError(false);
          isError(false);
          setErrorMessage('');
          setIsSuccess(true);
          setSuccessMessage('An email has been sent to you!');
        })
        .catch((error) => {
          console.log(error);
          setIsSuccess(false);
          setSuccessMessage('');
          isError(true);
          setErrorMessage(error.message);
        });
    }
  };

  const classes = useStyles();
  return (
    <Grow in={true} mountOnEnter unmountOnExit>
      <Container component="main" maxWidth="xs">
        <DocHeader>Reset Password</DocHeader>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
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
            />
            <Button
              className={classes.submit}
              variant="contained"
              fullWidth
              type="submit"
              onClick={sendResetEmail}
            >
              Submit
            </Button>
            <Grid container style={{ marginTop: '20px' }}>
              <Grid item style={{ width: '100%', textAlign: 'center' }}>
                <Linker to="/" variant="body2">
                  {'Cancel'}
                </Linker>
              </Grid>
            </Grid>
            {error && (
              <p style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>
                {errorMessage}
              </p>
            )}
            {isSuccess && (
              <p style={{ color: 'green', textAlign: 'center', marginTop: 20 }}>
                {successMessage}
              </p>
            )}
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Grow>
  );
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import fire from '../../../config/base';
// import { Helmet } from 'react-helmet';

// export default function ResetPass() {
//   const [email, setEmail] = useState('');
//   const [error, isError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const onChangeHandler = (event) => {
//     const { name, value } = event.currentTarget;

//     if (name === 'userEmail') {
//       setEmail(value);
//     }
//   };

//   const sendResetEmail = (event) => {
//     event.preventDefault();
//     fire
//       .auth()
//       .sendPasswordResetEmail(email)
//       .then(() => {
//         setEmail('');
//         isError(true);
//         setErrorMessage('An email has been sent to you!');
//         setTimeout(() => {
//           isError(false);
//         }, 3000);
//       })
//       .catch((error) => {
//         isError(true);
//         setErrorMessage(error.message);
//       });
//   };

//   // auth().onAuthStateChanged((user) => {
//   //   if (user) {
//   //     const userIsVerified = user.emailVerified;
//   //     setIsVerified(userIsVerified);
//   //   } else {
//   //     return;
//   //   }
//   // });

//   return (
//     <div className="mt-8 text-center">
//       <Helmet>
//         <title>Reset Password | Devser</title>
//       </Helmet>
//       <h1 className="text-xl text-center font-bold mb-3">
//         Reset your Password
//       </h1>
//       <div className="border-top border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
//         <form
//           action=""
//           style={{ marginTop: '20px' }}
//           className="d-flex flex-column"
//         >
//           {error && (
//             <p className="py-3 bg-red-600 w-full text-black text-center mb-3">
//               {errorMessage}
//             </p>
//           )}
//           <label htmlFor="userEmail" className="w-full block">
//             Email:
//           </label>
//           <input
//             type="email"
//             name="userEmail"
//             id="userEmail"
//             value={email}
//             placeholder="Input your email"
//             onChange={onChangeHandler}
//             className="mb-3 w-full px-1 py-2"
//           />
//           <button
//             className="w-full bg-blue-400 text-black py-3"
//             style={{ marginBottom: '20px' }}
//             onClick={(event) => {
//               sendResetEmail(event);
//             }}
//           >
//             Send me a Reset Link
//           </button>
//         </form>

//         <Link
//           to="/"
//           className="my-2 text-blue-700 hover:text-blue-800 text-center block"
//         >
//           Cancel
//         </Link>
//       </div>
//     </div>
//   );
// }
