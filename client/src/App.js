import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitlePage from "./pages/TitlePage"
import PokerTable from './pages/PokerTable';
import CreateProfile from './pages/CreateProfile';
import Login from './pages/Login';
import Footer from "./components/Footer";
import RCard from "./components/RFIDImageCard";


class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={TitlePage}/>
            <Route exact path="/table" component={PokerTable}/>
            <Route exact path="/createprofile" component={CreateProfile}/>
            <Route exact path="/login" component={Login}/>
            <Footer />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;