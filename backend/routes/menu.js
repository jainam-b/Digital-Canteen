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

router.put('/update/:itemId', async (req, res) => {
  const { itemId } = req.params; // Extract the item ID from the request parameters
  const { name, description, price, category } = req.body; // Extract the updated item details from the request body

  try {
    // Find the menu item by ID and update its details
    const updatedItem = await Menu.findByIdAndUpdate(itemId, { name, description, price, category }, { new: true });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    // Fetch the updated item from the database to ensure the latest data is returned
    const refreshedItem = await Menu.findById(itemId);

    res.json(refreshedItem); // Send the updated menu item as the response
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

 
