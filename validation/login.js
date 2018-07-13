const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // for is empty to work it needs to be a string (Vlaidator is Empty below would not be string otherwise)

  data.email = !isEmpty(data.email) ? data.email : ""; // turnary expression
  data.password = !isEmpty(data.password) ? data.password : "";

  // isLenght, isEmail, equals methods come from validator docs
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email field is invalid"; // will return error if email is empty
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required"; // will return error if email field is empty
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required"; // will return error if password field is empty
  }

  return {
    errors,
    isValid: isEmpty(errors) //making use of isEmpty function that has been imported from is-empty.js
  };
};
