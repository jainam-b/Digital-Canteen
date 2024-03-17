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
    let path = isAuthenticated() ? `/logout` : `/signup`;
    navigate(path);
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
      style={{ borderRadius: "18px" }}
      color="inherit"
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
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

        <div className="search-box">
          <SearchIcon style={{ marginRight: "20px" }} />
          <InputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            style={{ marginRight: "20px" }}
          />

          <div className="cart" onClick={handleNavigateCart}>
            <span className="count">{cartItems.length}</span>
            <ShoppingCartIcon />
          </div>
        </div>

        <div className="submit" onClick={handleNavigateSignUp}>
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
