import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";
import TitlePage from "./pages/TitlePage";
import PokerTable from "./pages/PokerTable";
import Footer from "./components/Footer";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import Profile from "./components/auth/Profile.js";
import CreateGame from "./pages/CreateGame";
import CardReader from "./pages/CardReader";
import PokerCounter from "./pages/PokerCounter";

// AuthRoute is a component that takes in props.loggedIn any other arbitrary
// props and returns either a route with all the props (besides loggedIn) copied
// into it, or it redirects to /login. In this way, we can replace any <Route />
// with <AuthRoute /> and have it check loggedIn status and proceed accordingly.
const AuthRoute = ({ loggedIn, ...rest }) =>
  loggedIn ? <Route {...rest} /> : <Redirect to="/login" />;

// inverse of AuthRoute
const NoAuthRoute = ({ loggedIn, ...rest }) =>
  loggedIn ? <Redirect to="/" /> : <Route {...rest} />

class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    token: null,
  };

  componentDidMount() {
    // when component mounts, check localStorage for jwtToken if it exists, and
    // set the state accordingly. 2nd argument passed to setState is a callback
    // that fires after setState has finished executing.
    this.setState({
      token: localStorage.getItem('jwtToken')
    }, () => this.getCurrentUserIfExists(this.state.token));
    // ajax call to get current user if exists
    ;
  }

  // method that takes jwt token as an argument and performs a GET
  // request to /api/users/current to retrieve the currently authenticated
  // user. IMPORTANT: make sure to include the token in the Authorization headers
  // or else we will get a 401 (unauthorized) from the server.
  getCurrentUserIfExists = token => {

    axios
      .get("/api/users/current", { headers: { Authorization: token }})
      .then(response => {
        console.log("resoponse", response);
        this.setState({
          user: response.data,
          loggedIn: true
        })
      })
      // if it fails then we can handle the error however we like,
      // perhaps through some sort of alert system. for now just console.log.
      .catch(error => {
        console.log("error", error.response);
      });
  }

  // handleLogin is a method that accepts authDt
  handleLogin = token => {
    this.setState({
      token: token,
    });
    this.getCurrentUserIfExists(token);
  }

  handleLogout = () => {

    axios.get('/api/users/logout')
      .then(response => {
        // clear localStorage of jwtToken
        localStorage.setItem('jwtToken', null);
        // update state with empty user and token.
        this.setState({
          user: null,
          token: null,
          loggedIn: false
        });
      })
      .catch(error => {
        // if it fails perhaps can add some notification handling here.
        console.log(error.response)
      })
    
  }

  render() {
    // declared loggedIn through ES6 destructuring assignment
    const { loggedIn } = this.state;
    console.log('App component rerendred')

    return (
      <Router>
        <div className="App">
          <Switch>
            {/* use render prop instead of component prop for Route b/c we want to pass in
            props to the rendered element (component prop won't let us do that). */}
            <Route exact path="/" render={routerProps => (
                <TitlePage
                  {...routerProps}
                  handleLogout={this.handleLogout}
                  loggedIn={loggedIn}
                />
              )}
            />

            {/* use render prop instead of component prop for Route b/c we want to pass in
            props to the rendered element (component prop won't let us do that). */}
            <NoAuthRoute loggedIn={loggedIn} exact path="/login" render={routerProps => (
                <Login {...routerProps} handleLogin={this.handleLogin} />
              )}
            />
            <NoAuthRoute loggedIn={loggedIn} exact path="/register" component={Register} />

            <AuthRoute loggedIn={loggedIn} exact path="/table" component={PokerTable} />
            <AuthRoute loggedIn={loggedIn} exact path="/CreateGame" component={CreateGame} />
            <AuthRoute loggedIn={loggedIn} exact path="/createprofile" component={Profile} />
            <AuthRoute loggedIn={loggedIn} exact path="/CardReader" component={CardReader} />

            <Redirect from="/logout" to="/" />

            {/*<Route exact path="/createprofile" component={CreateProfile}/>*/}
            {/*<Route exact path="/login" component={Login}/>*/}
            {/*<Route exact path="/CreateGame" component={CreateGame}/>*/}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
