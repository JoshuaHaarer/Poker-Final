import React, { Component } from 'react';
import PokerBossLogo from '../PokerBossLogo';
import ChipButton from '../ChipButton';
import './TitlePage.css';

class TitlePage extends Component {
   render() {
       return (
        <div className = "title-page">
          <PokerBossLogo />
          <div className = "buttons">
            <ChipButton text="Login" /> 
            <ChipButton text="Create Profile" /> 
            <ChipButton text="Create Game" /> 
          </div>  
        </div>    
       );
   } 
}

export default TitlePage;