import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/contact/Contact';
import Plume from './components/Plume/Plume';
import "./fonts/stylesheet.css";
import './App.css';




class App extends Component {
  render() {
    return (
    <Router>
      <Header/>
      <wrapper>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/Plume" component={Plume} />
        </switch>
      </wrapper>
    </Router>
  )}
}

export default App;