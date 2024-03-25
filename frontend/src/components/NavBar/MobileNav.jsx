import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood'; // Import the icon representing a food menu
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import "./NavBar.css";

const MobileNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { isAuthenticated, user, logOut } = useContext(AuthContext);

  const handlenavigateSignUp = () => {
    if (isAuthenticated()) {
      logOut(); // Call the logOut function if the user is authenticated
    } else {
      let path = `/signup`;
      navigate(path);
    }
  };

  const handlenavigateCart = () => {
    let path = `/cart`;
    navigate(path);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar-container">
      <AppBar
        position="fixed"
        className="navbar"
        style={{ borderRadius: "18px", cursor: "pointer", top: "auto", bottom: 0 }} // Set top to auto and bottom to 0
        color="inherit"
      >
        <Toolbar
          style={{ display:"contents", justifyContent: "space-between" }}
          className="NavToolBar"
        >
            <IconButton color="inherit" onClick={() => { navigate('/item') }}> {/* Redirect to menu page */}
            <FastfoodIcon /> {/* Icon representing a food menu */}
          </IconButton>
          <IconButton color="inherit" onClick={handlenavigateCart}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handlenavigateSignUp}>
            <PersonIcon />
          </IconButton>
        
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MobileNavBar;
