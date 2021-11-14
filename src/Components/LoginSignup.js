import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {saveLoginData} from '../Actions/details.action';
import { useState } from 'react';
import { Done } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}));

const LoginSignup=(props)=> {
  let [userEmail,setuserEmail]= useState('');
  let [userPassword,setuserpassword]= useState('');
  let dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const successLogin = (response) => {
    history.push("/home");
    console.log(response);
  }

  const failureLogin = (response) => {
    console.log(response);
  }
 

  const SubmitOnClick=(event)=>{
    event.preventDefault();

      const userData= {
        userEmail:userEmail,
        userPassword:userPassword
      };
       
      dispatch(saveLoginData(userData));
      // console.log("heyy");
       history.push("/home");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={SubmitOnClick} className={classes.form} noValidate>
          <TextField
          
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event)=>{
              setuserEmail(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event)=>{
              setuserpassword(event.target.value);
            }}
          />
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={SubmitOnClick}
          >
            Sign In
          </Button>
           <GoogleLogin
        clientId="1001489561189-4pvi9h22grm1p91b12sg08ibm4r5etqe.apps.googleusercontent.com"
        buttonText="Sign In With Google"
        onSuccess={successLogin}
        onFailure={failureLogin}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        type="submit"
        
        variant="contained"
        color="primary"
        className={classes.submit}
      />
        </form>
      </div>
      {/* <Box mt={8}>
       
      </Box> */}
    </Container>
  );
}
export default LoginSignup;





