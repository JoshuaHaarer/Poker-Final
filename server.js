const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Bringing Users Login and Registration Routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

/* //Below is how Zane set up Mongodb connection form DB Config to .catch
//DB Config
const db = require("./config/keys").mongoURI;
//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));*/

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());
//Passort Config
require("./config/passport")(passport);

// Add routes, both API and view
// app.use(routes);
// User Route
app.use("/api/users", users);
app.use("/api/profile", profile);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/poker-boss");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
