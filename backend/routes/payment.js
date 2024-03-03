const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const {config} =require("dotenv")
config({path:"./config/config.env"})
// Route to create a new order
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
// router.use(cors());

// // Initialize Razorpay client
// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
 



router.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error");
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});


module.exports=router;