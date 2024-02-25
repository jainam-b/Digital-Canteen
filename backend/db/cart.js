// cartItem.js
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://jainamb:jainamBagrecha@cluster0.h5mn9fs.mongodb.net/canteen-management-system"
);

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    quantity: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
