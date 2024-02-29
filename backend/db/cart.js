const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_URL);
 

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    quantity: { type: Number, required: true   },
    
    price: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true }
});


const Cart=mongoose.model('Cart', orderSchema);
module.exports = {
  Cart
}
