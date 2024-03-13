const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://jainamb:jainamBagrecha@cluster0.h5mn9fs.mongodb.net/canteen-management-system"
);

// const itemSchema = new mongoose.Schema({
//   orderId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     unique: true,
//   },
//   customerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User", // Reference to the User collection/table
//   },
//   items: [
//     {
//       itemId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "MenuItem", // Reference to the MenuItem collection/table
//       },
//       quantity: {
//         type: Number,
//         required: true,
//       },
//       price: {
//         type: Number,
//         required: true,
//       },
//     },
//   ],
//   totalPrice: {
//     type: Number,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "processing", "shipped", "delivered"],
//     default: "pending",
//   },
// });

// menu items
const menuItemSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["appetizer", "main course", "dessert"],
    required: true,
  },
  available: { type: Boolean, default: true },
  image: String, // Assuming you're storing the URL of the image
  createdAt: { type: Date, default: Date.now },
});

const Menu = mongoose.model("MenuItem", menuItemSchema);

 

module.exports = {  Menu };
