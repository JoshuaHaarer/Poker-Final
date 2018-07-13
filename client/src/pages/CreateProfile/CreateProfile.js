import React, { Component } from 'react';
import images from "../../images.json";
import './CreateProfile.css';

class CreateProfile extends Component {
    render() {
        return (
            <div className="grn-felt-bkg" style={{ backgroundImage: 'url(' + images.GreenFelt.src + ')' }} >
                <div className ="container-fluid">
                    <div className ="row justify-content-center">
                        <div className ="col-6 card-form">
                            <div className ="card font-weight-bold animated zoomIn">
                            <div className="card-header text-center">Profile Creation</div>
                                <div className ="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput">First Name</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Last Name</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">User Name</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-danger btn-lg">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProfile;
