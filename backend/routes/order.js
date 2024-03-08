const express = require("express");
const { Router } = require("express");
const router = Router();
const { MenuOrder } = require("../db");
 
router.get("/menu", async (req, res) => {
    try {
        // Retrieve all menu orders from the database
        const menuOrders = await MenuOrder.find();
        res.json(menuOrders);
      } catch (error) {
        console.error('Error retrieving menu orders', error);
        res.status(500).json({ message: 'Error retrieving menu orders' });
      }
});
// Create a 
router.get("/menu", async (req, res) => {
  try {
      // Retrieve all menu orders from the database
      const menuOrders = await MenuOrder.find();
      res.json(menuOrders);
    } catch (error) {
      console.error('Error retrieving menu orders', error);
      res.status(500).json({ message: 'Error retrieving menu orders' });
    }
});



 


module.exports = router;
