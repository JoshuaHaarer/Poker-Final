import React, { Component } from 'react';
import PokerBossLogo from '../PokerBossLogo';
import ChipButton from '../ChipButton';
import images from "../../images.json";
import './TitlePage.css';


class TitlePage extends Component {
        render() {
            return (
    <div className="grn-felt-bkg" style={{backgroundImage:'url('+images.GreenFelt.src+')'}} >  
        <div className = "title-page">
        <PokerBossLogo className = "logo-position"/>
            <div className = "buttons">
                <ChipButton text="Login" /> 
                <ChipButton text="Create Profile" /> 
                <ChipButton text="Create Game" /> 
            </div>  
        </div> 
    </div>       
            );
        } 
     }

export default TitlePage;
