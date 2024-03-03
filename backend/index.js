const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const orderRouter = require("./routes/order")
const userRouter = require("./routes/userSignup");
const menuRouter = require("./routes/menu");
const cartRouter = require("./routes/cart");
const paymentRouter = require("./routes/payment");
const placeOrderRouter = require("./routes/placeOrder");
// const filterRouter = require("./routes/filter");
const   JWT_SECRET   = process.env.JWT_SECRET


const cors = require('cors');
 
app.use(cors());

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/order", orderRouter)
app.use("/user", userRouter)
app.use("/menu", menuRouter)
app.use("/cart", cartRouter)
app.use("/pay", paymentRouter)
app.use("/api", placeOrderRouter)
// app.use("/status", filterRouter)

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
 