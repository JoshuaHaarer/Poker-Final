import React, { Component } from "react";
import Grid, { Col, Row, Container } from "./components/Grid";


class CreateGame extends Compnent {

    render(){
        return(
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>        
        );
    }
}