import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitlePage from "./pages/TitlePage"
import PokerTable from './pages/PokerTable';
import Footer from "./components/Footer";
import RCard from "./components/RFIDImageCard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={TitlePage}/>
            <Route exact path="/table" component={PokerTable}/>
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            {/*<Route exact path="/createprofile" component={CreateProfile}/>
               <Route exact path="/login" component={Login}/>*/}
            <Footer />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;