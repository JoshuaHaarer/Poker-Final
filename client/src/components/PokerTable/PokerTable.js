import React, { Component } from 'react';
// import PokerBossLogo from '../PokerBossLogo';
// import ChipButton from '../ChipButton';
import images from "../../images.json";
import './PokerTable.css';


class PokerTable extends Component {
    render() {
        return (
            <div className="grn-felt-bkg" style={{ backgroundImage: 'url(' + images.GreenFelt.src + ')' }} >
                <div className= "player-row">
                </div>
                <div className= "player-row">
                </div>
                <div className= "player-row">
                </div>
            </div>
        );
    }
}

export default PokerTable;
