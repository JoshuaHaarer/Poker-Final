import React, { Component } from "react";
import "./RCard.css";
import RFID2 from "../RFIDInfo/RFID2.json";


class RCard extends Component {
    state = {
        RFIDCard1: "./assets/images/playing_card_back.png",
        RFIDCard2: "./assets/images/playing_card_back.png",
        card1:"",
        card2:""
      };
    
    
      
    inputOnchange = (event) => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
    }
    
    
    handleFormSubmit = () => {
        const card1 = this.state.card1;
        const card2 = this.state.card2;
        // const RFIDCard1 = RFID2[card1];
        // console.log(RFIDCard1);
        this.setState({
            RFIDCard1: RFID2[card1].image,
            RFIDCard2: RFID2[card2].image
        });
    }

    /*onChange() {
        console.log(this.state);
    }*/

    render() {
        return (
            <div className="card rc-card">
                <div className="row">
                    <div className="col-4">
                        <img className="card-img-top" src={this.state.RFIDCard1} alt="" />
                    </div>
                    <div className="col-4">
                        <img className="card-img-top" src={this.state.RFIDCard2} alt="" />
                    </div>
                    <div className="col-4">
                    <input
                        className="form-control"
                        id="card1" 
                        name='card1'
                        type="text"
                        placeholder="input-1"
                        onChange={(event) => this.inputOnchange(event)}
                    />
                    <input
                        className="form-control"
                        id="card2" 
                        name='card2'
                        type="text"
                        placeholder="input-2"
                        onChange={(event) => this.inputOnchange(event)}
                    />
                    </div>
                </div>
                <a className="btn btn-primary" onClick={this.handleFormSubmit}>Verify Cards</a>
            </div>
            

        );
    }
}
export default RCard;