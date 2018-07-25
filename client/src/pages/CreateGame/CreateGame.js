import React, { Component } from "react";
import images from "../../images.json";
import ChipButton from '../../components/ChipButton';
// import ArrowButton from './../components/arrow-button';
import "./CreateGame.css";


class CreateGame extends Component {
    state = {

    }
    render() {
        return (
            <div className="grn-felt-bkg" style={{ backgroundImage: 'url(' + images.CreateBkgGrnFelt.src + ')' }} >
                <div className="container-fluid">

                    {/****** ROW FOR PLAYER INFO ******/}

                    <div className="row">
                        <div className="col-md-5">
                            <form>
                                <div className="form-group">
                                    <h2 className="heading-text" htmlFor="exampleFormControlTextarea1">Registered Players</h2>
                                    <textarea className="form-control" id="database exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-2">
                            {/* <ArrowButton onClick={console.log("clicked")}/> */}
                            {/* <button type="button" id="move-players" className="btn btn-danger">Move Players</button>*/}
                        </div>
                        <div className="col-md-5">
                            <form>
                                <div className="form-group">
                                    <h2 className="heading-text" htmlFor="exampleFormControlTextarea1 heading-text">Active Players</h2>
                                    <textarea className="form-control" id="registered exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>

                {/****** SELECT YOUR GAME TYPE ROW ******/}

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <form>
                                <div className="form-group">
                                    <h2 className="heading-text" htmlFor="gametype-select">Select Your Game Type</h2>
                                        <select multiple className="form-control" id="gametype-select">
                                            <option className="game-choice-box">Texas Hold-Em</option>
                                        </select>
                                </div>
                            </form>
                        </div>
                        <div className="col-3">
                            <button type="button" id="start" className="btn btn-danger">Start</button>
                        </div>
                    </div>
                    

                 {/****** SEATING ROW ******/}

                    <div className="row">
                        <div className="col-12">
                             <h2 className="seating heading-text center-content">SEATING</h2>
                        </div>
                    </div> 

                 {/****** SEATING DROP DOWN ROW ******/}
                    <div className="row">
                        <div className="col-3">
                        </div>

                        <div className="col-6">  
                            <h4 className="heading-text center-content" htmlFor="exampleFormControlSelect1">Number of Players at Table</h4>
                                <form>
                                    <div className="form-group counter-dropdown">
                                        <select className="form-control center-content" id="exampleFormControlSelect1">
                                            <option></option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                        </select>
                                    </div>
                                </form>
                        </div>

                        <div className="col-3">
                        <div className = "generate-table-chip-button">
                                {/* {
                                    loggedIn
                                        ?   <div onClick={handleLogout}>
                                                <ChipButton text="Log Out" link="/logout" />
                                            </div>
                                        :   <ChipButton text="Login" link="/login"/> 
                                    
                                } */}
                                
                                <ChipButton text="Generate Table" link="/createprofile" />

                                {/* <button className="btn btn-danger mt-1" ng-click="generate()">Generate Tables</button> */}
                            </div>
                        </div>

                    </div>


                {/****** ROW THAT CONTAINS THE GENERATE TABLE CHIP BUTTON ******/}

                    {/* <div className="row">
                        <div className="col-9">
                        </div>
                        
                        <div className="col-3">
                          
                        </div>
                    </div>  */}
                       
                           
                
                {/* the div below closes container tag */}
                </div>
        </div>
        

        );
    }
}

export default CreateGame;







                                    {/* <div className="table" ng-app="app" ng-controller="TableCtrl">
                                        <span>Min Seats/Table:</span>
                                        <input type="number" ng-model="options.seats" ng-init="options.seats=5" />
                                        <button className="btn btn-danger mt-1" ng-click="generate()">Generate Tables</button>
                                        <ul>
                                            <li ng-repeat="table in tables">
                                                <header className="text-styling">Table {{$index+1}}</header>
                                                <div className="person" ng-repeat="person in table track by $index">{{person}}</div>
                                            </li>
                                        </ul>
                                    </div> */}
