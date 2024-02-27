const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://jainamb:jainamBagrecha@cluster0.h5mn9fs.mongodb.net/canteen-management-system"
);
 

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    quantity: { type: Number, required: true   },
    
    price: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true }
});



module.exports = mongoose.model('cart', orderSchema);
