import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Modal,
} from "@mui/material";
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CloseModal() {
  const { logIn, setAuthenticated, authenticated } = useContext(AuthContext);
  console.log(authenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true); // State variable to control modal open/close

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    if (authenticated) {
      localStorage.setItem("isUserLoggedIn", "true");
    } else {
      localStorage.removeItem("isUserLoggedIn");
    }
    setIsModalOpen(!authenticated); // Close the modal if user is authenticated
  }, [authenticated]);
  

  const handlenavigateHomepage = () => {
    let path = `/cart`;
    navigate(path);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      const response = await logIn(userData);
      console.log(response); // Check the response data structure

      if (response && response.token) {
        // Login successful, store token in local storage
        localStorage.setItem("token", response.token);
        console.log("Login successful", response);
        handlenavigateHomepage();
        handleCloseModal(); // Close the modal after successful login
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
    <Modal 
    open={!authenticated}
      onClose={handleCloseModal}
      style={{
        backdropFilter: "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        transition: "none", // Remove transition effect
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
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
                <Button
                  variant="contained"
                  onClick={handleLogin}
                  className="LoginBtn"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          {error && <div className="error">{error}</div>}{" "}
          {/* Display error message */}
          <div className="forgotPassword">
            <Typography variant="body1">
              Lost Password? <span>Click here</span>
            </Typography>
          </div>
        </Container>
      </div>
    </Modal>
  );
}
