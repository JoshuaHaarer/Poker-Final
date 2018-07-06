import React, { Component } from 'react';
import PokerBossLogo from '../PokerBossLogo';
import ChipButton from '../ChipButton';
import GreenFelt from './GreenFelt.jpg';
import './TitlePage.css';


class TitlePage extends Component {
        render() {
            return (
    <div className="grn-felt-bkg" style={{backgroundImage:'url('+GreenFelt+')'}} >  
        <div className = "title-page">
        <PokerBossLogo />
            <div className = "buttons">
                <ChipButton text="Login" /> 
                <ChipButton className = "wrapWords" text="Create Profile" /> 
                <ChipButton className = "wrapWords" text="Create Game" /> 
            </div>  
        </div> 
    </div>       
            );
        } 
     }

export default TitlePage;

// class TitlePage extends Component {
//     render() {
//         return (
//  <div className="green-felt-bkg" style={{background:'url('+greenFelt+')'}} >  
//              <div className = "title-page">
//              <PokerBossLogo />
//              <div className = "buttons">
//                  <ChipButton text="Login" /> 
//                  <ChipButton text="Create Profile" /> 
//                  <ChipButton text="Create Game" /> 
//              </div>  
//              </div> 
//          </div>       
//         );
//     } 
//  }