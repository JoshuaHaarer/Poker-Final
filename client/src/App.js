import React, { Component } from 'react';
import Footer from "./components/Footer"
import TitlePage from "./components/TitlePage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitlePage />
        <Footer />
      </div>
    );
  }
}

export default App;
