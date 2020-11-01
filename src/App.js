import React from "react";
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

            <Route path="/chat">
              <Header backButton="/"/>
              <h1>I am chat page</h1>
            </Route>

            <Route path="/setting">
              <Header backPage="/"/>
              <h1>I am setting page</h1>
            </Route>

            <Route path ="/" >
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

