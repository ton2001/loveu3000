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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;


