import React, { Component } from 'react';
import images from "../../images.json";
import './Seating.css';
import Avatar from "../Avatar";


class Seating extends Component {
        render() {
            const {avatar, player} = this.props;
            return (
    <div className="seating" style={{backgroundImage:'url('+images.PlayerBkg.src+')'}} >  
        <Avatar name={avatar}/>
        <div className="player-name">{player || "Open Seat"}</div>
        {/* only displays button when player exists */}
        {player && <button className="quit-button">X</button>} 
    </div>
            );
        } 
     }

export default Seating;
