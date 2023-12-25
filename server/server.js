const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');
const cors = require('cors');
require('dotenv').config();

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

// Routes
const userRouter = require('./routes/user.router');

app.use('/api/user', userRouter);


const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('=======================');
});