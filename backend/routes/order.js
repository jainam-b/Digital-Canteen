const express = require("express");
const { Router } = require("express");
const router = Router();
const { MenuOrder } = require("../db");
const io = require('socket.io')(server);

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



// Listen for new order placement
app.post('/orders', (req, res) => {
    // Handle order placement logic

    // Emit the new order to all connected clients (including the dashboard)
    io.emit('newOrder', newOrderDetails);
    
    res.send('Order placed successfully');
});


module.exports = router;
