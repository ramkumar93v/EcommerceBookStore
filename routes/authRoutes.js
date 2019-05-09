const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { //'google'-> this is needed to call GoogleStrategy. it was written in such a way authenticate
      // that to call that we need to specify the word 'google'
      scope: ['profile', 'email'] // this is the permission we are going to ask from the user
    })
  );

  // Google will redirect the user to this URL after approval.  Finish the
  // authentication process by attempting to obtain an access token.  If
  // access was granted, the user will be logged in.  Otherwise,
  // authentication has failed.
  app.get('/auth/google/callback', passport.authenticate('google'),(req, res)=>{

    res.redirect("http://localhost:3000/")
  });


  app.get('/api/currentUser', (req, res)=>{

     res.send(req.user);
    //  res.send(req.session);

  });

  app.get('/api/logout', (req, res)=>{
    req.logout(); //passport attaches this logout to req, it kills the id in req
    res.send(req.user);
  });

  app.get('/api/currentUser', (req, res)=>{

     res.send(req.user);

  });
}
