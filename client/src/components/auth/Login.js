import React, { Component } from "react";
import axios from "axios";
import images from "../../images.json";
import ChipButton from '../../components/ChipButton';
import "./Login.css"
import classnames from "classnames"; // this will allow the variable of bootstrap error text by creating a variable of className when needed by errors in form fields

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {} 
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this); // need to bind onChange
}

onChange(e) {
  this.setState({[e.target.name]: e.target.value});
}

onSubmit(e) {
  e.preventDefault();

  const user = {
    email: this.state.email,
    password: this.state.password,
  };

  //console.log(user);
  // with axios will make login request with onSubmit with user being the data 
  axios.post('/api/users/login' , user) // will have to put http://localhost/3000 if not using proxy value
    .then(res => {
      console.log(res.data);
      // set the jwtToken in local storage to cache our authenticated "session" (client-side session)
      localStorage.setItem('jwtToken', res.data.token);
      // pass the token up to the parent through this.props.handleLogin
      this.props.handleLogin(res.data.token);
    })
    .catch(err => this.setState({errors: err.response.data}));//this will set errors to the state errors object
}

  render() {

    const styles = {
      color: "white"
    };
    console.log('this.props',this.props)

    const { location } = this.props;
    // let showRegistrationSuccessMsg = true
    let showRegistrationSuccessMsg = (
      location.pathname.includes('registerSuccess')
    );

    return (
      <div className="grn-felt-bkg" style={{backgroundImage:'url(/'+images.GreenFelt.src+')'}} > 
      <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center" style={styles}>Log In</h1>
            <p className="lead text-center" style={styles}>Sign into your Player Profile</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input 
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Email Address" 
                name="email"
                value={this.state.email} 
                onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input 
                type="password" 
                className="form-control 
                form-control-lg" 
                placeholder="Password" 
                name="password" 
                value={this.state.password} 
                onChange={this.onChange}
                />
              </div>
              <input type="submit" id="login-submit" className="btn btn-danger btn-block mt-4" />
            </form><br/><br/>
            {
              showRegistrationSuccessMsg
                ? <div className="alert alert-success" style={{ marginTop: '20px' }}>
                    New user successfully registered!
                  </div>
                : <ChipButton className="img-fluid" text="New User" link="/register" />
            }
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default Login;
