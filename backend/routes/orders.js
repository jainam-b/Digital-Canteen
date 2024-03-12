const express = require("express");
const router = express.Router();
const { Cart } = require("../db/cart"); 
const { Menu } = require("../db/index");
const { User } = require("../db/user");
const userMiddleware = require("../middlewares/auth");
const {Order} = require("../db/order");

// Endpoint to add items to the order database
router.post("/add", async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Validate input
    if (!userId || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: "Invalid input. Please provide valid user ID and items.",
      });
    }

    const errorMessages = [];
    // Fetch item details from MenuItem schema
    const itemsToAdd = await Promise.all(
      items.map(async (item) => {
        if (!item.itemId) {
          errorMessages.push("Item ID is required.");
          return null;
        }
        const menuItem = await Menu.findById(item.itemId);
        if (!menuItem) {
          errorMessages.push(`Item with ID ${item.itemId} not found.`);
          return null;
        }
        const quantity = item.quantity || 1; // Set quantity to 1 if not provided
        return { itemId: menuItem._id, quantity, price: menuItem.price };
      })
    );

    // Check if any items were not found
    if (errorMessages.length > 0) {
      return res.status(404).json({ messages: errorMessages });
    }

    // Create the order
    const order = new Order({
      user: userId,
      items: itemsToAdd,
      totalPrice: itemsToAdd.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to retrieve user's cart
router.get("/cart", async (req, res) => {
  try {
    const { userId } = req.body;

    // Validate input
    if (!userId) {
      return res
        .status(400)
        .json({ message: "Invalid input. Please provide a valid user ID." });
    }

    // Find user's cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found for the user." });
    }

    // Fetch details of each item in the cart
    const populatedItems = await Promise.all(
      cart.items.map(async (item) => {
        const menuItem = await Menu.findById(item.itemId);
        if (!menuItem) {
          throw new Error(`Item with ID ${item.itemId} not found.`);
        }
        return { ...item.toObject(), name: menuItem.name }; // Add item name to item details
      })
    );

    // Replace items in the cart with populated items
    cart.items = populatedItems;

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:cartItemId", async (req, res) => {
  try {
    const { userId } = req.query;
    const { cartItemId } = req.params; //the food item id which i want to change 
    const { quantity } = req.body;

    // Validate input
    if (!userId || !cartItemId || !quantity || quantity <= 0) {
      return res
        .status(400)
        .json({
          message:
            "Invalid input. Please provide valid user ID, cart item ID, and quantity.",
        });
    }

    // Find user's cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found for the user." });
    }
    
    // Find the cart item to update
    const cartItem = cart.items.find(
      (item) => item.itemId.toString() === cartItemId
    );
      
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found." });
    }

    // Update the quantity of the cart item
    cartItem.quantity = quantity;
    cartItem.totalPrice = cartItem.price * quantity;

    // Save the updated cart
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/auth", userMiddleware, async (req, res) => {
  try {
    const username = req.username;

    const user = await User.findOne({ username });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User ID:", user._id);

    res.status(200).json({ userId: user._id });
  } catch (error) {
    console.error("Error in /auth route:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
