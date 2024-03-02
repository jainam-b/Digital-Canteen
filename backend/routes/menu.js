const express = require("express");
const { Router } = require("express");
const router = Router();
const { Menu } = require("../db/index");
// const userMiddleware = require("../middlewares/user");

//Retrive all the menu items from the Database Menu
router.get("/menuitems", async (req, res) => {
  try {
    // Retrieve all menu orders from the database
    const menuOrders = await Menu.find();
    res.json(menuOrders);
  } catch (error) {
    console.error("Error retrieving menu orders", error);
    res.status(500).json({ message: "Error retrieving menu orders" });
  }
});

// Endpoint to get menu items with optional category filter
// http://localhost:3001/menu?category=main course 
router.get("/", async (req, res) => {
  try {
    let filter = {};
    if (req.query.category) {
        console.log(req.query.category);
      filter.category = req.query.category.toLowerCase(); // Convert to lowercase for case-insensitive matching
    }
    const menuItems = await Menu.find(filter);
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

 
