import React, { Component } from 'react';
import TitlePage from "./components/TitlePage"
import Footer from "./components/Footer";

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
