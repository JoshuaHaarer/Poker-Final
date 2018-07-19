import React, { Component } from "react";
import axios from "axios";
import images from "../../images.json";
import avatars from "../../avatars.json";
import classnames from "classnames";
import "./Proflile.css";



class Profile extends Component {

  
  render() {

    const styles = {
        width: "18rem"
      };
    
      return (
      <div className="grn-felt-bkg" style={{backgroundImage:'url('+images.GreenFelt.src+')'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="jumbotron">
                <h2 className="display-3 text-center mb-12">Player Profile</h2>
                <hr className="my-3" />
                
                <div className="card col-md-8 m-auto" style={styles}>
                <img class="card-img-top m-auto" src="assets/avatars/empty_seat.png" alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title mt-2">
                      Poker Boss Player Profile
                    </h5>
                    <p className="card-text" />
                  </div>
                  <ul className="list-group list-group-flush">
                    <h6 className="list-group-item text-dark">Player Name: Josh </h6>
                    <h6 className="list-group-item text-dark">Player Wins: 0 </h6>
                    <h6 className="list-group-item text-dark">Player Knockouts: 0 </h6>
                    <h6 className="list-group-item text-dark">Player Rank: 0 </h6>
                  </ul>
                  <div className="card-body">
                    <a href="http://localhost:3000" className=" card-link text-dark home">
                      Poker Boss Home  
                      <a href="http://localhost:3000/creategame" className="card-link text-dark tour">
                      Tournament Info
                    </a>
                    </a>
                    
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
