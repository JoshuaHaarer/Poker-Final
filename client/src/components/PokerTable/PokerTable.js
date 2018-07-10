import React, { Component } from 'react';
import images from "../../images.json";
import './PokerTable.css';
import Seating from "../Seating";


class PokerTable extends Component {
    render() {
        return (
            <div className="grn-felt-bkg" style={{ backgroundImage: 'url(' + images.GreenFelt.src + ')' }} >

                <div className="field" style={{ backgroundImage: 'url(' + images.Field.src + ')' }}>
                    {/* EXAMPLE: <div className='seat seat-1' ><Seating avatar={players[0].avatar} player={players[0].name}/></div> */}
                    <div className='seat seat-1' ><Seating avatar="HelloKitty" player="Kathy"/></div>
                    <div className='seat seat-2' ><Seating avatar="Dinosaur" player="Rex" /></div>
                    <div className='seat seat-3' ><Seating /></div>
                    <div className='seat seat-4' ><Seating /></div>
                    <div className='seat seat-5' ><Seating /></div>
                    <div className='seat seat-6' ><Seating /></div>
                    <div className='seat seat-7' ><Seating /></div>
                    <div className='seat seat-8' ><Seating /></div>
                    <div className='seat seat-9' ><Seating /></div>
                    <div className="playing-cards">CARDS COMPONENT WILL GO HERE</div>
                </div>

            </div>
        );
    }
}

export default PokerTable;
