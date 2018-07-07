import React, { Component } from 'react';
// import PokerBossLogo from '../PokerBossLogo';
// import ChipButton from '../ChipButton';
import GreenFelt from './GreenFelt.jpg';
import './PokerTable.css';


class PokerTable extends Component {
    render() {
        return (
            <div className="grn-felt-bkg" style={{ backgroundImage: 'url(' + GreenFelt + ')' }} >
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
