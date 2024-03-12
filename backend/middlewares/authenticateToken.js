const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Get the token from headers or query parameters
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required.' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
    // Set the authenticated user to req.auth
    req.auth = user;
    next();
  });
}

module.exports = authenticateToken;
