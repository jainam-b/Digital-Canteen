import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import { useMediaQuery } from 'react-responsive';
import MobileNavBar from '../NavBar/MobileNav'; // Import your MobileNavBar component

const NavBar = () => {
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

  // Use media query to check if the screen size is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile ? ( // Render MobileNavBar if the screen size is mobile
        <MobileNavBar />
      ) : ( // Render regular NavBar for desktop view
        <AppBar 
          position="static"
          className="navbar"
          style={{ borderRadius: "18px", cursor: "pointer"  , marginTop:"-5%"}}
          color="inherit"
        >
          <Toolbar
            style={{ justifyContent: "space-between" }}
            className="NavToolBar"
          >
            <Typography variant="h6" component="div">
              <img
                src="finallogo.jpg"
                alt="Logo" 
                onClick={() => {
                  window.location.href = "/";
                }}
                className="logo"
              />  
            </Typography>

            <div className={`menu ${showMenu ? "active" : ""}`}>
              <ul>
                <li
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    window.location.href = "/item";
                  }}
                >
                  Menu
                </li>
                <li
                  onClick={() => {
                    window.location.href = "/about";
                  }}
                >
                  About
                </li>
                {/* <li
                  onClick={() => {
                    window.location.href = "/about";
                  }}
                >
                  Shop
                </li> */}
              </ul>
            </div>

            <div className="search-box">
              <div className="cart" onClick={handlenavigateCart}>
                <span className="count">{cartItems.length}</span>
                <ShoppingCartIcon />
              </div>
            </div>

            <div className="signup-container">
              <div className="submit" onClick={handlenavigateSignUp}>
                {isAuthenticated() ? "Logout" : "Signup"}
              </div>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleMenu}
                sx={{ display: { md: "none" } }}
                className={`HamBurger ${showMenu ? "active" : ""}`}
              >
                {showMenu ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default NavBar;
