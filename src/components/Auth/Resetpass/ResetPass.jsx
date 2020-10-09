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

import { auth } from '../../../config/base';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
  const [error, isError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendResetEmail = (event) => {
    event.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail('');
        isError(true);
        setErrorMessage('An email has been sent to you!');
        setTimeout(() => {
          isError(false);
        }, 3000);
      })
      .catch((error) => {
        isError(true);
        setErrorMessage(error.message);
      });
  };

  const classes = useStyles();
  return (
    <Grow in={true} mountOnEnter unmountOnExit>
      <Container component="main" maxWidth="xs">
        <DocHeader>Reset Password</DocHeader>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={sendResetEmail}
            >
              Submit
            </Button>
            <Grid container style={{ marginTop: '20px' }}>
              <Grid item style={{ width: '100%', textAlign: 'center' }}>
                <Linker to="/" variant="body2" className="link">
                  {'Cancel'}
                </Linker>
              </Grid>
            </Grid>
            {error && (
              <p style={{ color: 'green', textAlign: 'center', marginTop: 20 }}>
                {errorMessage}
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
