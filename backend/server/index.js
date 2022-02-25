require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local')
const local = require('./strategies/local.js');
const session = require('express-session');
const PORT = process.env.port || 3000;

const app = express();


// Router
const router = require('./routes.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use(session({
  secret: process.env.secret,
  cookie: {maxAge: 8640000},
  saveUninitialized: false,
  resave: false,
}));
// Set up routes
app.use(router);

//passport session
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {console.log(`I'm listening on PORT: ${PORT}`)});