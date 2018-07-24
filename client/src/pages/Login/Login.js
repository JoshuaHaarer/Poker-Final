import React, { Component } from 'react';
import images from "../../images.json";
import './Login.css';


class Login extends Component {
    render() {
        return (
            <div className="grn-felt-bkg" style={{ backgroundImage: 'url(' + images.logInPage.src + ')' }} >
                <div className ="container-fluid">
                    <div className ="row justify-content-center">
                        <div className ="col-6 card-form text-center">
                            <div className ="card font-weight-bold animated zoomIn">
                            <div className="card-header text-center">Login</div>
                                <div className ="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput">Username</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="reptar@yahoo.com"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Password</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="tacocat"/>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-danger btn-lg">Login</button>
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

export default Login;
