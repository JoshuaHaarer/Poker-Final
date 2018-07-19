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

const AuthRoute = ({ loggedIn, ...rest }) =>
  loggedIn ? <Route {...rest} /> : <Redirect to="/login" />;

class App extends Component {
  state = {
    loggedIn: false,
    user: null
  };

  componentDidMount() {
    // ajax call to get current user if exists
    axios
      .get("/api/users/current")
      .then(response => {
        console.log("resoponse", response);
      })
      .catch(error => {
        console.log("error", error.response);
      });
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={TitlePage} />

            {!loggedIn && <Route exact path="/login" component={Login} />}
            {!loggedIn && <Route exact path="/register" component={Register} />}

            <AuthRoute exact path="/table" component={PokerTable} />
            <AuthRoute exact path="/CreateGame" component={CreateGame} />
            <AuthRoute exact path="/createprofile" component={Profile} />
            <AuthRoute exact path="/CardReader" component={CardReader} />

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
