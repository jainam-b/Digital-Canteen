import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export default function CloseModal() {
  const { logIn, setAuthenticated, authenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    if (authenticated) {
      localStorage.setItem("isUserLoggedIn", "true");
    } else {
      localStorage.removeItem("isUserLoggedIn");
    }
  }, [authenticated]);

  const handlenavigateHomepage = () => {
    let path = `/cart`;
    navigate(path);
  };

  const handleClose = () => {
    // Close the dialog
    setAuthenticated(true); // Assume the user is authenticated to close the dialog
  };

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      const response = await logIn(userData);
      console.log(response); // Check the response data structure

      if (response && response.token) {
        localStorage.setItem("token", response.token);
        console.log("Login successful", response);
        handlenavigateHomepage();
        setAuthenticated(true);
      } else {
        console.error("Login failed:", response && response.msg);
        setError("Invalid email or password"); // Set error message
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Error logging in. Please try again later."); // Set error message
    }
  };

  return (
    <Dialog
      open={ !authenticated}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      
    >
      <DialogTitle>
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
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
              <Button
                variant="contained"
                onClick={handleLogin}
                fullWidth
                size="large"
                style={{ marginTop: '1rem' , backgroundColor: '#F48E28'  }} 

              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        {error && <div className="error">{error}</div>}
        <div className="forgotPassword" style={{ marginTop: 10 }}>
          <Typography variant="body1">
            Lost Password? <span>Click here</span>
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
}
