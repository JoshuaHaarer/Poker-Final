import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitlePage from "./pages/TitlePage"
import PokerTable from './pages/PokerTable';
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
            <Footer />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;