const JwtStrategy = require("passport-jwt").Strategy; // passport strategy type
const ExtractJwt = require("passport-jwt").ExtractJwt; //
const mongoose = require("mongoose");
const User = mongoose.model("users"); // got ('users') this from Users.js in models line 27
const keys = require("../config/keys"); // need this to pull our secret

// below is from the passport-jwt docs but tweaked to fit our needs
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey; // adds our secret

module.exports = passport => {
  // passing in passport as param from server.js line 29
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // using new jwt strategy and pass in options and what is given back is a function that gives us our payload and done
      User.findById(jwt_payload.id) // mongoose method and jwt payload is an object with id in it
        .then(user => {
          if (user) {
            return done(null, user); // user has been found
          }
          return done(null, false); // user has not been found
        })
        .catch(err => console.log(err)); // in case something goes wrong
    })
  );
};
