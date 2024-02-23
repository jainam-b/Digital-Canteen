const   JWT_SECRET   = process.env.JWT_SECRET
const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
  // accessing token from headers and verifying using secret and sending to the route
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  if (decodedValue.username) {
    req.username = decodedValue.username;
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}

module.exports = userMiddleware;
