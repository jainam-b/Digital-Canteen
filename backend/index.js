const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const orderRouter = require("./routes/order")
const userRouter = require("./routes/userSignup");
const menuRouter = require("./routes/menu");
const cartRouter = require("./routes/cart");
// const filterRouter = require("./routes/filter");
const   JWT_SECRET   = process.env.JWT_SECRET

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/order", orderRouter)
app.use("/user", userRouter)
app.use("/menu", menuRouter)
app.use("/cart", cartRouter)
// app.use("/status", filterRouter)

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 