const express = require('express');
const router = express.Router();
const Cart = require('../db/cart');
const { Menu } = require('../db/index');

// Endpoint to add items to the cart
router.post('/add', async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Validate input
    if (!userId || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Invalid input. Please provide valid user ID and items.' });
    }

    const errorMessages = [];
    // Fetch item details from MenuItem schema
    const itemsToAdd = await Promise.all(items.map(async (item) => {
      if (!item.itemId) {
        errorMessages.push('Item ID is required.');
        return null;
      }
      const menuItem = await Menu.findById(item.itemId);
      if (!menuItem) {
        errorMessages.push(`Item with ID ${item.itemId} not found.`);
        return null;
      }
      const quantity = item.quantity || 1; // Set quantity to 1 if not provided
      return { itemId: menuItem._id, quantity, price: menuItem.price };
    }));

    // Check if any items were not found
    if (errorMessages.length > 0) {
      return res.status(404).json({ messages: errorMessages });
    }

    // Create the order
    const order = new Cart({
      user: userId,
      items: itemsToAdd,
      totalPrice: itemsToAdd.reduce((total, item) => total + (item.price * item.quantity), 0)
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
