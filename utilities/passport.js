var mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('../models/Users');
var users = mongoose.model('users');

const keys = require('../config/key');


// https://console.developers.google.com

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', // this is the url for the redirection
    proxy:true
  }, async (accessToken, refreshToken, profile, done) => { // this will be called after redirection from google

    //console.log('profile:  ' + JSON.stringify(profile)); emails[0].value, displayName
  const  existingUser= await users.findOne({ googleId: profile.id});
      if (existingUser) {
        //means user exists
      return   done(null, existingUser); // done is required to end passport callback. 1st argument is exception (i.e) null here.
      }
        //creating user user
      const user =await  new users({ googleId: profile.id,
                                      name:profile.displayName,
                                       email:profile.emails[0].value}).save();

          done(null, user);


      //after this serializeUser () will be called automatically

  })
); // registering our Strategy

passport.serializeUser((user, done) => {
  console.log('serializeUser-->'+ user.id)
  return done(null, user.id); // unique id from mongo, reason we are not using googleId is we may not know how the use has signed up (google, fb)
});
passport.deserializeUser((id, done) => {
  console.log('deserializeUser-->'+ id)
  users.findById(id).then(user => {
    done(null, user);
  });
});
