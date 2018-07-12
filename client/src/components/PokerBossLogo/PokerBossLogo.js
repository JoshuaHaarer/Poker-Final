import React, { Component } from 'react';
import logo from './PokerBossLogo.png';
import './PokerBossLogo.css';

class PokerBossLogo extends Component {
   render() {
       return (
        <div className = "col-8">
          <img className = 'img-fluid animated bounceInDown' src = { logo } />
        </div>    
       );
   } 
}

export default PokerBossLogo;