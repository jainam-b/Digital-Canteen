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
      // getting the details back from our font-end
      const {
          orderCreationId,
          razorpayPaymentId,
          razorpayOrderId,
          razorpaySignature,
      } = req.body;

      // Creating our own digest
      // The format should be like this:
      // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
      const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

      shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

      const digest = shasum.digest("hex");

      // comaparing our digest with the actual signature
      if (digest !== razorpaySignature)
          return res.status(400).json({ msg: "Transaction not legit!" });

      // THE PAYMENT IS LEGIT & VERIFIED
      // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

      res.json({
          msg: "success",
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
      });
  } catch (error) {
      res.status(500).send(error);
  }
});

// Backend endpoint for handling successful payment confirmation
// router.post("/order-conform", async (req, res) => {
//   try {
//     // Process the payment and update the order status in the database

//     // Send confirmation message to the user
//     const { orderId, amount, userEmail } = req.body;

//     // Construct the confirmation message
//     const confirmationMessage = `Your payment of ${amount} for order ${orderId} has been successfully confirmed. Thank you for your purchase!`;

//     // Send the confirmation message via email, SMS, or other messaging service
//     // Example: Sending confirmation email
//     const nodemailer = require("nodemailer");
//     const transporter = nodemailer.createTransport({
//       // Configure transporter (e.g., SMTP, API key for email service)
//     });
    
//     const mailOptions = {
//       from: "jainambagrecha10@gmail.com",
//       to: userEmail,
//       subject: "Payment Confirmation",
//       text: confirmationMessage,
//     };

//     await transporter.sendMail(mailOptions);
    
//     res.status(200).json({ message: "Payment confirmation message sent successfully" });
//   } catch (error) {
//     console.error("Error sending payment confirmation message:", error);
//     res.status(500).json({ message: "Error sending payment confirmation message" });
//   }
// });


module.exports=router;