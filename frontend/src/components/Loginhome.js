import React, { useState } from 'react';
import auth from '../firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from 'firebase'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';

//Material UI
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" >
        {'Copyright © '}
        {'mini project '}
        {new Date().getFullYear()}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/09/09/12/50/phuket-3664495_1280.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
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
  

export default function Loginhome({ setSession }) {
    const classes = useStyles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const handleLogin = async () => {
      try {
        const response = await auth.signInWithEmailAndPassword(
          username,
          password
        );
        
        const { user } = response;
  
        setSession({
          isLoggedIn: true,
          currentUser: user
        });
      } catch (error) {
        setSession({
          isLoggedIn: false,
          currentUser: null,
          errorMessage: error.message
        });
      }
    };
  
    const handleRegister = async () => {
      try {
        const response = await auth.createUserWithEmailAndPassword(
          username,
          password
        );
  
        const { user } = response;
  
        setSession({
          isLoggedIn: true,
          currentUser: user
        });
      } catch (error) {
        setSession({
          isLoggedIn: false,
          currentUser: null,
          errorMessage: error.essage
        });
      }
    };
    const uiConfig = {
      signInFlow: "popup",
      signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
    return (
        <Grid container component="main" className={classes.root} >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
           <FaceIcon color="primary" style={{ fontSize: 80 }}/>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div className={classes.form} noValidate>
              <TextField
                onChange={(e) =>setUsername(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={(e) =>setPassword(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Button
                onClick={handleLogin}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Button
              onClick={handleRegister}
                color="secondary"
                fullWidth
                variant="contained"
                
              >
                Register
              </Button>
              <Box mt={2}>
              <Link href="/admin" variant="body2">
                    Admin Login
                  </Link>
                  <StyledFirebaseAuth 
                    fullWidth
                    uiConfig={uiConfig}
                     firebaseAuth={firebase.auth()}
                 />
              </Box>
              <Box mt={2}>
                <Copyright />
              </Box>
              
            </div>
            
          </div>
        </Grid>
      </Grid>
    );
}
