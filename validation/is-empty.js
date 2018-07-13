// runs through sernarios of values that are not correct
// test if the field typed by user has not value
const isEmpty = value => {
    return (
      value === undefined || // if value is undefiend
      value === null || // if value is null
      (typeof value === "object" && Object.keys(value).length === 0) || // check to see if empty object (if no keys then its an empty object)
      (typeof value === "string" && value.trim().length === 0) // if string is empty then no string
    );
  };
  
  module.exports = isEmpty;