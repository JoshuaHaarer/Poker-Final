import React, { Component } from 'react';
import TitlePage from "./components/TitlePage"
import PokerTable from './components/PokerTable';
import Footer from "./components/Footer";
import RCard from "./components/RFIDImageCard";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TitlePage /> */}
        <PokerTable />
      
        <Footer />
      </div>
    );
  }
}

export default App;
