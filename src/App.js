import React, { Component } from "react";
import Header from './components/Layout/Header';
import Grid from './components/Projects/Grid';
import "./fonts/stylesheet.css";


export default class extends Component {
  render() {
    return <wrapper>
      <Header/>
      <Grid/>
    </wrapper>
  }
}