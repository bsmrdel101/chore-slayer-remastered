const session = require('express-session');
require('dotenv').config();

const serverSessionSecret = () => {
  return process.env.SESSION_SECRET;
};

module.exports = session({
  secret: serverSessionSecret() || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7, secure: false },
});
