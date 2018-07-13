const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs"); // encrypts the user registration
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register"); // bringing in register errors object logic
const validateLoginInput = require("../../validation/login"); // bringing in login errors object logic

// Load User Model -- Bringing in mongoose schema to check existing info(email)
const User = require("../../models/User");

// @route GET api/users/tests
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ message: "Users is Working" }));

// @route GET api/users/register
// @desc Register user
// @access Public
// use mongoose to find if email exists because we dont want users to register with an email in database

// User Registration npm install bcrypt and gravatar
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body); //must check for all req going back using destructuring

  // Check Validation
  if (!isValid) {
    //not valid
    return res.status(400).json(errors); // if errors it will return an object with the errors inside
  }

  User.findOne({ email: req.body.email }).then(user => {
    // use find one mongoose method to look for record of email the user is trying to register with

    if (user) {
      errors.email = "Email already exists";
      //this checks if user user email exists
      return res.status(400).json({ errors }); //error if email exists and return errors object
    } else {
      // avatar info and must install npm gravatar for this to work
      // from gravatar docs
      const avatar = gravatar.url(req.body.email, {
        // this is from gravatar docs (search gravatar library and its node.js )
        s: "200", // Size of avatar
        r: "pg", // Rating allowed for imag
        d: "mm" // Sets Default avatar for folks that dont use gravatar email
      });
      // creates new User and uses an object to take in info and posts to server and db
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });
      // genSalt is a method from bcrypt docs for hashing
      bcrypt.genSalt(10, (err, salt) => {
        // 10 is number of characters and uses a callback function
        // hashes password, passes plain text(newUser is plain text as of now), and passes a callback, the hash is what we want to store in db
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash; // sets the password to the hash (instead of plain text)
          newUser
            .save() // gives us user that is created
            .then(user => res.json(user)) // sends back sucessful response with that user (responds with the user)
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route GET api/users/login
// @desc Login User / Returning JWT Token
// @access Public
// add login functionality -- accept users email, validate that the email exists, and validate the user password
// User Email and Password Login
// Creating the JWT
// post request -- user sends form that has email and password
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body); //must check for all req going back using destructuring

  // Check Validation
  if (!isValid) {
    //not valid
    return res.status(400).json(errors); // if errors it will return an object with the errors inside
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find user by email by using the User Email
  User.findOne({ email }).then(user => {
    // instead of {email: email} use ES6 and just {email}
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors); // error status 404 is not found
    }

    // Check Password ( function arguments - password is plain text password and user.password is the hashed encrypted password )
    // compare is method from bcrypt docs
    bcrypt.compare(password, user.password).then(isMatch => {
      // password that user types is plain text and password in db is hashed so we need to compare the two to verify
      if (isMatch) {
        // User Matched

        // Payload
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // create jwt payload

        // Sign Token --- method from JWT Docs
        jwt.sign(
          payload,
          keys.secretOrKey, // dont want to put key in code so put in keys file and require the file in
          { expiresIn: 3600 }, // expires the user token so user will have to log back in (3600 is one hour)
          (err, token) => {
            // call back function that gives an error or token
            res.json({
              // send token as a response
              success: true,
              token: "Bearer " + token // Bearer is type of token protocol
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route GET api/users/current
// @desc Current user
// @access Private
// ------------->This is a protected Route <-------------------
// get request arguments(pass-authnt(jwt is our strategy, session is not being used) and call back function)
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      // created own json response object to keep password private instead of req.user which has all info
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;