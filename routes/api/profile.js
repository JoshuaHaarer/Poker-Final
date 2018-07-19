const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

// Load Profile Model -- Bringing in mongoose schema
const Profile = require("../../models/Profile");
// Load User Model -- Bringing in mongoose schema
const User = require("../../models/User");

// @route GET api/profile/tests
// @desc Tests profile route
// @access Public
router.get("/test", (req, res) => res.json({ message: "Profile is Working" }));

// @route GET api/profile
// @desc get current users profile
// @access Private
//jwt is our passport strategy and passort auth will make the route private
// this will get current users profile
router.get("/", passport.authenticate("jwt", { session: false }),(req, res) => {
    //const errors = {};

    Profile.findOne({ user: req.user.id }) //mongo method -- pulling user id from the schema that will have the id in the payload
      .then(profile => {
        if(!profile) {
            errors.noprofile = 'There is no profile for this user'; // this a check if we have the user make a profile and its not there but I think we may use an auto generated profile
            return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
