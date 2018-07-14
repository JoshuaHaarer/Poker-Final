import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames"; // this will allow the variable of bootstrap error text by creating a variable of className when needed by errors in form fields

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {} 
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this); // need to bind onChange
  }

  //  this wil target the user inputs and put them in the State values above
  // also try useing(this.setState({[name]: value }));
  //// handle any changes to the input fields
  //handleInputChange = event => {
  // Pull the name and value properties off of the event.target (the element which triggered the event)
  //const { name, value } = event.target;

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }); // this will set the state to the value of the user input
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
        //console.log(newUser);
    // with axios will make registration request with onSubmit with newUser being the data
    // from backend (users.js line 27-73) it will go through validation, save if successful and respond with the user data
    // if post goes wrong it will respond with the error handleing 
    axios.post('htttp://localhost:3000/api/users/register' , newUser) // will have to put http://localhost:3000 if not using proxy value
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))

  }

  render() {
    
    const {errors} = this.state; // using destructuring to pull errors from the state
    
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">Create your Player Profile</p>
              <form noValidate onSubmit={this.onSubmit}>     
                <div className="form-group"> 
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      'is-invalid': errors.name  // errors.name created in validation // noValidate above gets rid of html5 auto alerts
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      'is-invalid': errors.email  // errors.email created in validation 
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                  <small className="form-text text-muted">
                    A profile image can be used if registered with a gravatar email.
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      'is-invalid': errors.password  // errors.password created in validation 
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      'is-invalid': errors.password2  // errors.password2 created in validation 
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                </div>
                <input type="submit" className="btn btn-danger btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
