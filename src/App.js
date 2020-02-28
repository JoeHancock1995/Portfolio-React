import React, { Component } from "react";
import Header from './components/Layout/Header';
import CardGrid from './components/Projects/CardGrid';
import "./fonts/stylesheet.css";


export default class extends Component {
  render() {
    return <wrapper>
      <Header/>
      <CardGrid/>
    </wrapper>
  }
}