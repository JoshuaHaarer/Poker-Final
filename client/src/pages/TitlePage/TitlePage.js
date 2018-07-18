import React, { Component } from 'react';
import PokerBossLogo from '../../components/PokerBossLogo';
import ChipButton from '../../components/ChipButton';
import images from "../../images.json";
import './TitlePage.css';


class TitlePage extends Component {
    render() {
        return (
            <div className="grn-felt-bkg" style={{backgroundImage:'url('+images.GreenFelt.src+')'}} >  
                <div className = "container-fluid">
                    <div className = "row justify-content-center">
                        <PokerBossLogo/>
                    </div>
                    <div className = "row justify-content-center">
                        <div className = "buttons">
                            <ChipButton text="Login" link="/login"/> 
                            <ChipButton text="Create Profile" link="/createprofile" /> 
                            <ChipButton text="Create Game" link="/CreateGame" />
                            <ChipButton text="CardReader" link="/CardReader" /> 
                        </div>  
                    </div>
                </div> 
            </div>       
        );
    } 
}

export default TitlePage;
