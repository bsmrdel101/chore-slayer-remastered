const cookieSession = require('cookie-session');
require('dotenv').config();

const serverSessionSecret = () => {
  return process.env.SESSION_SECRET;
};

module.exports = cookieSession({
  secret: serverSessionSecret() || 'secret',
  key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
  resave: 'false',
  saveUninitialized: false,
  maxAge: 1000 * 60 * 60 * 24 * 7,
  secure: false,
});
