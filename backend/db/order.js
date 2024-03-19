const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who placed the order
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true }, // Reference to the menu item
    quantity: { type: Number, required: true } // Quantity of the menu item
  }],
  totalPrice: { type: Number, required: true }, // Total price of the order
  status: {
    type: String,
    enum: ["pending", "preparing", "ready", "completed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now } // Timestamp of when the order was created
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {Order};
