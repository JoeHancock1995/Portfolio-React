import React, { Component } from "react";
import Header from './components/Layout/Header';
import Card from './components/Layout/Card';

export default class extends Component {
  render() {
    return <wrapper>
      <Header/>
      <Card/>
    </wrapper>
  }
}