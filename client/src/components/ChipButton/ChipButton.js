import React, { Component } from "react";
import "./ChipButton.css";
import pokerChip from "./poker_chip.png";

class ChipButton extends Component {
  render() {
    return (
      <div className="chip-button">
        <a href={this.props.link}><img className="img-fluid pokerchip" src={pokerChip} alt="chip button"/></a>
        <div className="button-text"> {this.props.text}</div>
      </div>
    );
  }
}

export default ChipButton;
