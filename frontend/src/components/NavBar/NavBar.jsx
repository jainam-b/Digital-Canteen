import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { isAuthenticated, user, logOut } = useContext(AuthContext);

  const handleNavigateSignUp = () => {
    if (isAuthenticated()) {
      logOut(); // Call the logOut function if the user is authenticated
    } else {
      let path = `/signup`;
      navigate(path);
    }
  };
  
  const handleNavigateCart = () => {
    let path = `/cart`;
    navigate(path);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <AppBar
      position="static"
      className="navbar"
      style={{ borderRadius: "18px",cursor:"pointer" }}
      color="inherit"
    >
      <Toolbar style={{ justifyContent: "space-between" }} className="NavToolBar">
        <Typography variant="h6" component="div">
          <img src="foodlogo.png" alt="Logo" onClick={()=>{window.location.href="/"}}  className="logo" />
        </Typography>

        <div className={`menu ${showMenu ? "active" : ""}`}>
          <ul>
            <li onClick={()=>{window.location.href="/"}}>Home</li>
            <li  onClick={()=>{window.location.href="/item"}}>Menu</li>
            <li onClick={()=>{window.location.href="/"}}>Services</li>
            <li onClick={()=>{window.location.href="/"}}>Shop</li>
          </ul>
        </div>

        <div className="search-box">
          {/* <SearchIcon style={{ marginRight: "20px" }} />
          <InputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            style={{ marginRight: "20px" }}
          /> */}

          <div className="cart" onClick={handleNavigateCart}>
            <span className="count">{cartItems.length}</span>
            <ShoppingCartIcon />
          </div>
        </div>

        <div className="submit "  style={{}} onClick={handleNavigateSignUp}>
          {isAuthenticated() ? "Logout" : "Signup"}
        </div>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;