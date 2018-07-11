import React, { Component } from "react";
import "./ChipButton.css";
import pokerChip from "./poker_chip.png";

class ChipButton extends Component {
  render() {
    return (
      <div className="chip-button">
        <img className="img-fluid" src={pokerChip} alt="chip button"/>
        <div className="button-text"> {this.props.text}</div>
      </div>
    );
  }
}

export default ChipButton;
