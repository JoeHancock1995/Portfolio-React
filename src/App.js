import React, { Component } from "react";
import Header from './components/Layout/Header';
import Grid from './components/Projects/Grid';


export default class extends Component {
  render() {
    return <wrapper>
      <Header/>
      <Grid/>
    </wrapper>
  }
}