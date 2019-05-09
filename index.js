 /* require keyword is from common js modules.common js module is a system to share code between different files
   import express from 'express'; -> es 2015 syntax not supported in node js */

 const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('./models/Users');
require('./utilities/passport');
const app = express(); // configured app to listen to request, all route handlers will be registered here.


const key = require('./config/key');

mongoose.connect(key.mongoURI);

// cookie session handler, we need to tell passport to make use of authenticate
const cookieSession= require('cookie-session');
const passport= require('passport');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(
  cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,  // in milli secs
  keys:[key.cookieKey]  // this should be an array, it will pick any random cookie and use
})
);

app.use(passport.initialize());
app.use(passport.session()); // telling passport to make use of session
require('./routes/routes')(app);
 /*app.get('/', (req, res) => { // express js route handler
   res.send({
     bye: 'goodbye'
   });
 }) */




 const PORT = process.env.PORT || 4000;
 /*process.env.PORT -> when app is deployed in prod mode,
                                      it returns the port number that we configured in aws or heroku.
                                       || -> else statement use that if available else use 5000 */

 app.listen(PORT); // node is waiting for traffic at this port and transfers it to express
