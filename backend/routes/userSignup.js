const express = require("express");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const { User } = require("../db/user");
const {config} =require("dotenv")
config({path:"./config/config.env"})
const JWT_SECRET = process.env.JWT_SECRET;
const userMiddleware = require("../middlewares/user");
const { createUser, loginUser } = require("../zod/type");

// Error handling middleware
const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: "Internal Server Error" });
};

router.post("/signup", (req, res) => {
  try {
    
    const userData = createUser.safeParse(req.body);
console.log(userData);
    // Create user if validation succeeds
    const user = User.create({
      username: userData.data.username,
      email: userData.data.email,
      password: userData.data.password,
    });
    if (userData.success) {
      res.json({
        msg: "Account Created!!",
      });
    }
  } catch (error) {
    // Handle validation errors
    res.status(400).json({
      error: "Validation Error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = loginUser.safeParse(req.body);
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const isPasswordValid = password === user.password;

    if (isPasswordValid) {
      const token = jwt.sign({ email }, JWT_SECRET);

      // Set the token in the response header
      res.setHeader('Authorization', `Bearer ${token}`);
      
      // Send token in the response body
      res.json({ token });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error occurred while signing in",
      error: error.message,
    });
  }
});


router.use(errorHandler);
module.exports = router;
