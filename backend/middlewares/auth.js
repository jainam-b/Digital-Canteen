const jwt = require("jsonwebtoken");
const { User } = require("../db/user");

async function userMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;  
    const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decodedValue.username) {
      req.username = decodedValue.username;
      const username = decodedValue.username;
      console.log(username);
      const user = await User.findOne({ username });
      
      if (!user) {
        console.log("User not found");
      }
      
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (error) {
    console.error("Error in userMiddleware:", error);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
}

module.exports = userMiddleware;
