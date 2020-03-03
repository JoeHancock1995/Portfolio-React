import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/contact/Contact';
import "./fonts/stylesheet.css";



class App extends Component {
  render() {
    return <Router>
      <Header/>
      <wrapper>
        <switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        </switch>
    </wrapper>
    </Router>
  }
}

export default App;