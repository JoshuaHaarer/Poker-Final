import React, { Component } from 'react';
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
        <RCard />
        <Footer />
      </div>
    );
  }
}

export default App;
