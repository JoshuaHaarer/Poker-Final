const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // if a request is sent with an empty field it will not be a string and Vaildator needs a string to work
  // for is empty to work it needs to be a string (Vlaidator is Empty below would not be string otherwise)
  // this is what isEmpty is testing for
  // if is is not empty it will be the user data but if the field is empty it will be an empty string (turnary expression)
  // user data first gets tested by turnary for empty field and then goes throuh the validator
  //
  data.name = !isEmpty(data.name) ? data.name : ""; // turnary expression
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""; // confirmation password

  // isLenght, isEmail, equals methods come from validator docs
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters"; //defineng length of name
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required"; // will return error if name field is empty
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required"; // will return error if email field is empty
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email field is invalid"; // will return error if email is empty
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required"; // will return error if password field is empty
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = " Password must be at least 6 characters "; // will return error if password field is not long enough
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required"; // will return error if name field is empty
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match"; // will return error if passwords dont match
  }

  return {
    errors,
    isValid: isEmpty(errors) //making use of isEmpty function that has been imported from is-empty.js
  };
};
