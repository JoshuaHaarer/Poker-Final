import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitlePage from "./pages/TitlePage"
import PokerTable from './pages/PokerTable';
import Footer from "./components/Footer";
import RCard from "./components/RFIDImageCard";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import Profile from "./components/auth/Profile.js";



class App extends Component {
  render() {
    return (

      
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={TitlePage}/>
            <Route exact path="/table" component={PokerTable}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />

            {/*<Route exact path="/createprofile" component={CreateProfile}/>*/}
            {/*<Route exact path="/login" component={Login}/>*/}
            {/*<Route exact path="/CreateGame" component={CreateGame}/>*/}
            

            
              
              
            
            {/*<Route exact path="/createprofile" component={CreateProfile}/>
               <Route exact path="/login" component={Login}/>*/}
            

          </Switch>
          {/*<Footer />*/}
        </div>
      </Router>


    );
  }
}

export default App;