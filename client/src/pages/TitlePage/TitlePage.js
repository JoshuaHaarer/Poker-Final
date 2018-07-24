import React, { Component } from 'react';
import PokerBossLogo from '../../components/PokerBossLogo';
import ChipButton from '../../components/ChipButton';
import images from "../../images.json";
import './TitlePage.css';


class TitlePage extends Component {

    render() {

        const { loggedIn, handleLogout } = this.props;

        return (
            <div className="grn-felt-bkg" style={{backgroundImage:'url('+images.GreenFelt.src+')'}} >  
                <div className = "container-fluid">
                    <div className = "row justify-content-center">
                        <PokerBossLogo/>
                    </div>
                    <div className = "row justify-content-center">
                        <div className = "buttons">
                            {
                                loggedIn
                                    ?   <div onClick={handleLogout}>
                                            <ChipButton text="Log Out" link="/logout" />
                                        </div>
                                    :   <ChipButton text="Login" link="/login"/> 
                                
                            }
                            
                            <ChipButton text="Player Profile" link="/profile" /> 
                            <ChipButton text="Create Game" link="/CreateGame" />
                            <ChipButton text="Card Reader" link="/CardReader" /> 
                        </div>  
                    </div>
                </div> 
            </div>       
        );
    } 
}

export default TitlePage;
