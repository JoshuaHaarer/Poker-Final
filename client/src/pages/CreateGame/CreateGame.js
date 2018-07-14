import React, { Component } from "react";
import images from "../../images.json";
import ChipButton from "../../components/ChipButton";
import "./CreateGame.css";

class CreateGame extends Component {

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
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Game Style</label>
                            <textarea class="form-control" id="gameStyle exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <button type="button" id="generate-seats" class="btn btn-danger">Generate Seats</button>
                    </div>
                    <div className="col-md-4">
                    <button type="button" id="start" class="btn btn-danger">Start</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="seating">SEATING</div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Table #1</label>
                            <textarea class="form-control" id="table1 exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Table #2</label>
                            <textarea class="form-control" id="table2 exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Table #3</label>
                            <textarea class="form-control" id="table3 exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>

            </div>
        </div>
             
        );
    }
}

export default CreateGame;