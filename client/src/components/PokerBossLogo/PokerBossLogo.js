import React, { Component } from 'react';
import logo from './PokerBossLogo.png';
import './PokerBossLogo.css';

class PokerBossLogo extends Component {
   render() {
       return (
        <div className = "poker-boss-logo">
          <img className = 'logo' src = { logo } />
        </div>    
       );
   } 
}

export default PokerBossLogo;