import React, { Component } from "react";
import Navigation from './components/Navigation.js'
import Carousel from './components/Carousel.js'
import HomeForm from './components/HomeForm.js'
import logo from "./images/OpinAdsLogo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Carousel/>
      <HomeForm/>
      </div>
    );
  }
}

export default App;
