import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import GoogleLogin from 'react-google-login';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// import history from '../helpers/history';



const useStyles = makeStyles({
  root: {
    width: 500,
    margin: '0 auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '80vh'
  },
  googleBtn: {
    margin: '0 auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: 14,
  },
});

export default function LoginPage(props) {
  const classes = useStyles();
  
const responseGoogle = (response) => {
  if (response.googleId) {
    localStorage.setItem('isLoggedIn', true);
    props.history.push('/')
  }
}
  return (
    <Card className={classes.root}>
      <CardContent className={classes.googleBtn}>
      <Typography variant="h5" component="h2">
          Unsplash photos
        </Typography>
        <br/>
        <br/>

        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </CardContent>
    </Card>
  );
}
