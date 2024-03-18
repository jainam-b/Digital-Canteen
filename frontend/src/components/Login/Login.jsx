import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import './Login.css';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handlenavigateHomepage = () => {
    let path = `/`;
    navigate(path);
  };
  const handlenavigateSignup = () => {
    let path = `/signup`;
    navigate(path);
  };

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      const response = await logIn(userData);
      console.log(response); // Check the response data structure
      
      if (response && response.token) {
        // Login successful, store token in local storage
        localStorage.setItem('token', response.token);
        console.log('Login successful', response);
        handlenavigateHomepage();

      } else {
        console.error('Login failed:', response && response.msg);
        setError('Invalid email or password'); // Set error message
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError('Error logging in. Please try again later.'); // Set error message
    }
  };
  
  

  return (
    <div className='loginPage'>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleLogin}  style={{width:"100%"}} className='LoginBtn'>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        {error && <div className="error">{error}</div>} {/* Display error message */}
        <div className="forgotPassword">
          <Typography variant="body1">
          Dont have account? <span onClick={handlenavigateSignup}>Sign up</span>
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Login;
