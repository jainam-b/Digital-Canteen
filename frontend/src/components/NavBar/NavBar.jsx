import React, { useState } from "react";
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
import { useCart } from "../Context/CartContext";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handlenavigateSignUp = () => {
    let path = `/signup`;
    navigate(path);
  };
  const handlenavigateCart = () => {
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
      style={{ borderRadius: "18px" }}
      color="inherit"
    >
      <Toolbar style={{ justifyContent: "space-between" }} className="NavToolBar">
        <Typography variant="h6" component="div">
          <img src="foodlogo.png" alt="Logo" className="logo" />
        </Typography>

        <div className={`menu ${showMenu ? "active" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Shop</li>
          </ul>
        </div>
 
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          sx={{ display: { md: "none" } }}
          className="HamBurger"
        >
          <MenuIcon />
        </IconButton>
        

        <div className="submit" onClick={handlenavigateSignUp}>
          Signup
        </div>
        <div className="cart" onClick={handlenavigateCart}>
            <span className="count">{cartItems.length}</span>
            <ShoppingCartIcon />
          </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
