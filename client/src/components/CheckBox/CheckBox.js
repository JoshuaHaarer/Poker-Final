import React from "react";
import "./CheckBox.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CheckBox = props => (
  <span className="checkbox" {...props}>
    ✗
  </span>
);

export default CheckBox;