import React, { Component } from "react";
import RCard from "../../components/RFIDImageCard";
import "./CardReader.css";
import images from "../../images.json";

class CardReader extends Component {

    render() {
        return(
            <div className="grn-felt-bkg" style={{backgroundImage:'url('+images.GreenFelt.src+')'}} >
            <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                <ul>
                    <li>HOW TO:</li>
                </ul>
                </div>
                <div className="col-3 text-center">
                    <RCard />
                </div>
                <div className="col-3 text-center">
                    <RCard />
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-3">
                <ul>
                    <li className="instructions">#1 Plug Reader In</li>
                    <li className="instructions">#2 Click Field Before Scanning Card</li>
                </ul>
                
                </div>
                <div className="col-3 text-center">
                    <RCard />
                </div>
                <div className="col-3 text-center">
                    <RCard />
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-3">
                <ul>
                    <li>Verify Card!</li>
                </ul></div>
                <div className="col-3 text-center">
                    <RCard />
                </div>
                <div className="col-3 text-center">
                    <RCard />
                </div>
                <div className="col-3"></div>
            </div>
            </div>
            </div>
        );
    }
}

export default CardReader;