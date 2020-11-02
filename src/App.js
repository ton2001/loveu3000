import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import TinderCards_copy from './components/TinderCards_copy';
import SwipeButtons from './components/SwipeButtons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Love from './components/love1'
import Love2 from './components/love1_copy'
import Pic from './components/pic'
import Pic2 from './components/pic_copy'
import Tex from './components/tex'
import Filter from './components/Filter'
import Filter2 from './components/Filter_copy'
import Chats from './components/Chats'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/chat">
            <Header backButton="/"/>
            <Chats />
        </Route>
        <Route path = '/setting'>
            <Header backPage="/"/>
            <h1>Setting Page</h1>
        </Route>
        <Route path = '/'>
              <Header />
              <SwipeButtons />
              <Tex />
              <Love />
              <Love2 />
              <TinderCards_copy />
              <Pic />
              <Pic2 />
              <Filter />
              <Filter2 />
          </Route>
        </Switch>
      

    </div>
    </Router>
  );
}

export default App;


