// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphaW5hbSIsImlhdCI6MTcwOTA1MjY5Mn0._uVf6xHL_bPUD8r3f21CNs5RKc_EZRe2ShY5QVSS9Lw
const   JWT_SECRET   = process.env.JWT_SECRET
const jwt = require("jsonwebtoken");
const User =require("../db/user")
function userMiddleware(req, res, next) {
  const token = req.headers.authorization;  
  const decodedValue = jwt.verify(token, JWT_SECRET);
  if (decodedValue.username) {
    req.username = decodedValue.username;
    const username=decodedValue.username
    console.log(decodedValue.username);
    const userId=User.findOne({username})
    if(!userId){
        console.log("errorasdfasdf");
    }
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}

module.exports = userMiddleware;
