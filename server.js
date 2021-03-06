const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const PORT = process.env.PORT || 5000;
const mongodbUri =
  'mongodb://admin:fuzzygadfly614@ds211724.mlab.com:11724/portfolio';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', expressJwt({ secret: process.env.SECRET }));

//connect to db
mongoose.set('useCreateIndex', true);
mongoose.connect(
  mongodbUri,
  { useNewUrlParser: true },
  err => {
    if (err) throw err;
    console.log('Connected to the database');
  }
);

app.use('/auth', require('./routes/auth'));

app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === 'UnauthorizedError') {
    res.status(err.status);
  }
  return res.send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`);
});
