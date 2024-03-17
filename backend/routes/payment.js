const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const {config} =require("dotenv")
config({path:"./config/config.env"})

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
// router.use(cors());
 
 

 

router.post("/orders", async (req, res) => {
  try {
      const instance = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_API_SECRET,
      });

      const options = {
          amount: 50000, // amount in smallest currency unit
          currency: "INR",
          receipt: "receipt_order_74394",
      };

      const order = await instance.orders.create(options);

      if (!order) return res.status(500).send("Some error occured");

      res.json(order);
  } catch (error) {
      res.status(500).send(error);
  }
});

router.post("/success", async (req, res) => {
    try {
        // Getting the details back from our front-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        // Creating our own digest
        const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET);
       

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        // Comparing our digest with the actual signature
        if (digest !== razorpaySignature) {
            // Signature mismatch error
            return res.status(400).json({ msg: "Transaction signature mismatch" });
        }

        // The payment is legit and verified
        // You can save the details in your database if you want

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
  } catch (error) {
      res.status(500).send(error);
  }
});

 


module.exports=router;