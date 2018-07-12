import React from "react";
import "./RCard.css";




const RCard = () => (
    <div className="card rc-card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="" alt="Card image cap" />
        <img className="card-img-top" src="" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Your Cards</h5>
            <p className="card-text"><div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div></p>
            <a href="#" className="btn btn-primary">Verify Cards</a>
        </div>
    </div>

);

export default RCard;