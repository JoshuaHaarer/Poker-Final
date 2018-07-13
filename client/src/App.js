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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        
      </div>
    );
  }
}

export default App;