import React, { Component } from 'react';
import Footer from "./components/Footer"
import TitlePage from "./components/TitlePage"
import PokerTable from './components/PokerTable';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TitlePage />
        <PokerTable />
        <Footer />
      </div>
    );
  }
}

export default App;
