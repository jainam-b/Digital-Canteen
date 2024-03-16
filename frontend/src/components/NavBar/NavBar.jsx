// NavBar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <AppBar position="static" className="navbar" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="foodlogo.png" alt="Logo" className="logo" />
        </Typography>

        <div className={`menu ${showMenu ? 'active' : ''}`}>
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
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <div className='search-box'>
          <SearchIcon />
          <InputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
          <ShoppingCartIcon className='carti' />
          <div className='submit'>Signup</div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
