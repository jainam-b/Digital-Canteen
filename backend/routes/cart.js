const express = require("express");
const { Router } = require("express");
const router = Router();
const { Menu } = require("../db");
const authenticateToken = require('../middlewares/authenticateToken');

router.get("/menu",authenticateToken, async (req, res) => {
    try {
        // Retrieve all menu orders from the database
        const menuOrders = await Menu.find();
        res.json(menuOrders);
      } catch (error) {
        console.error('Error retrieving menu orders', error);
        res.status(500).json({ message: 'Error retrieving menu orders' });
      }
});
// Create a 
router.get("/menus", async (req, res) => {
  try {
      // Retrieve all menu orders from the database
      const menuOrders = await Menu.find();
      res.json(menuOrders);
    } catch (error) {
      console.error('Error retrieving menu orders', error);
      res.status(500).json({ message: 'Error retrieving menu orders' });
    }
});





module.exports = router;
