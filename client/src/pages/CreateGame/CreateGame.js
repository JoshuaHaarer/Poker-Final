import React, { Component } from "react";
import images from "../../images.json";
import ChipButton from "../../components/ChipButton";
import "./CreateGame.css";


class CreateGame extends Component {
    state = {
        
    }
    render() {
        return (
        <div className="grn-felt-bkg" style={{backgroundImage:'url('+images.GreenFelt.src+')'}} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Datebase Players</label>
                            <textarea class="form-control" id="database exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="col-4">
                    <button type="button" id="move-players" class="btn btn-danger">Move Players</button>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Registered Players</label>
                            <textarea class="form-control" id="registered exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <form>
                        <div className="form-group">
                            <label for="gametype-select">Select Your GameType</label>
                            <select multiple className="form-control" id="gametype-select">
                                <option>Texas Hold-Em</option>
                            </select>
                        </div>
                    </form>
                </div>
                    
                    <div className="col-3">
                    <button type="button" id="start" class="btn btn-danger">Start</button>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="seating">SEATING</div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                        <div className="col-8 text-center">
                        <div className="table" ng-app="app" ng-controller="TableCtrl">
                            <header>
                                <span>Min Seats/Table:</span>
                                <input type="number" ng-model="options.seats" ng-init="options.seats=5" />
                                <button className="btn btn-success mt-1" ng-click="generate()">Generate Tables</button>
                            </header>
                            <ul>
                                <li ng-repeat="table in tables">
                                    <header>Table {/*{{$index+1}}*/}</header>
                                    <div className="person" ng-repeat="person in table track by $index">{/*{{person}}*/}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>

            </div>
            
        </div>
             
        );
    }
}

export default CreateGame;