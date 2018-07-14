const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, // this will accosiate the user by its id and the user schema
    ref: "users" // this will reference the user colleciton
  } /*
    avatar: {
        type: "????",
        required: false
    },*/,
  name: {
    type: String,
    required: true,
    trim: true
  },
  wins: {
    type: Number,
    required: "Must be a Number",
    min: 0,
    max: 100000
  },
  knockouts: {
    type: Number,
    required: "Must be a Number and Heads Up only",
    min: 0,
    max: 100000
  },
  rank: {
    type: Number,
    required: "Must be a Number",
    min: 0,
    max: 10000000
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
