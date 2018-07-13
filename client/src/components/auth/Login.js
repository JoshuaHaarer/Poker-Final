import React, { Component } from "react";
import axios from "axios";
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
  axios.post('http://localhost:3001/api/users/login' , user) // will have to put http://localhost/3000 if not using proxy value
  .then(res => console.log(res.data))
  .catch(err => this.setState({errors: err.response.data}));//this will set errors to the state errors object
}

  render() {
    return (
      <div>
      <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign into your Player Profile</p>
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
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default Login;
