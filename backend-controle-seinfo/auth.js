const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const url = req.originalUrl;
  const token = req.headers['x-access-token'];
  if (
    url === '/api/login/' ||
    url === '/api/loginLDAP/' ||
    url === '/api/autentication/'
  ) {
    next();
    return;
  }
  if (!token)
    return res.status(401).json({ auth: false, message: 'No token provided.' });
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err)
        return res
          .status(500)
          .json({ auth: false, message: 'Failed to authenticate token.' });
      req.userId = decoded.id;
      next();
    });
  }
};
