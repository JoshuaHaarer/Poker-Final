import React, { Component } from 'react';
import images from "../../images.json";
import './PokerCounter.css';


class PokerCounter extends Component {
    
    state = {
        time: 900,
        active: false,
        blind: 5
      };

    getSeconds = () => {
        return ('0' + this.state.time % 60).slice(-2)
    };  

    getMinutes = () => {
        return Math.floor(this.state.time / 60)
    }; 

    handleTimer = () => {
        let _this = this;
        if (this.state.active === false){
            this.incrementer = setInterval(() => {
                _this.setState({time: _this.state.time -1})
            }, 1000);
            this.setState({active: true})
        }
        else if (this.state.active === true) {
           clearInterval(this.incrementer);
           this.setState({active: false})
        }
    };

    getBigBlind = () => {
        return (this.state.blind * 2)
    };
    
    handleNewRound = () => {
        let _this = this;
        clearInterval(_this.incrementer);
        _this.setState({time: 900});
        _this.setState({active: false});
        _this.setState({blind: _this.state.blind * 2});
    };

    render() {

        const clockStyle = {
            color: "#f3fc3f",
            fontFamily: "georgia",
            fontSize: "15vmax"
        };

        const blindStyle = {
            color: "#f3fc3f",
            fontFamily: "georgia",
            fontSize: "10vmax"
        };

        const roundStyle = {
            borderRadius:"30px"
        };

        return (
            <div className="grn-felt-bkg" style={{ backgroundImage: 'url(' + images.GreenFelt.src + ')' }} >
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 text-white text-center">
                            <h1>Poker Boss Counter</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-white text-center">
                            <button type="button" className="btn btn-danger btn-lg" style={roundStyle} onClick={this.handleTimer}>Play/Pause</button>
                        </div>
                        <div className="col-6 text-white text-center">
                            <button type="button" className="btn btn-success btn-lg" style={roundStyle} onClick={this.handleNewRound}>Next Round</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <h1 id="clock" style={clockStyle}>{this.getMinutes()}:{this.getSeconds()}</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <h1 id="blind" style={blindStyle}>{this.state.blind}/{this.getBigBlind()}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokerCounter;
