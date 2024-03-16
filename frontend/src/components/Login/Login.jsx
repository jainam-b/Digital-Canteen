// Login.js
import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import './Login.css';

const Login = () => {
  return (
    <div className='loginPage'>
      {/* <div className="background"></div> */}
      <Container maxWidth="sm" className="loginContainer">
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                placeholder="Email id"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained"   className='LoginBtn'>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="forgotPassword">
          <Typography variant="body1">
            Lost Password? <span>Click here</span>
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Login;
