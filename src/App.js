import React, { Component } from "react";
import Navigation from './components/Navigation.js'
import Carousel from './components/Carousel.js'
import HomeForm from './components/HomeForm.js'
import FeatureStrip from './components/FeatureStrip.js'
import FeatureStripLeft from './components/FeatureStripLeft.js'

import logo from "./images/OpinAdsLogo.png";
import introductionImage from "./images/introduction.png";
import buildImage from "./images/buildPage.png";
import advertiseImage from "./images/advertise.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Carousel/>
      <FeatureStrip
        headline="Introducing You to Facebook"
        paragraph="We will get you started with everything you need to launch your very own business page, including a custom cover photo, detail setup, and more!"
        buttonText="See An Example!"
        image={introductionImage}
      />
      <FeatureStripLeft
        headline="Your Very Own Listing Page"
        paragraph="Don't have a page for your new listing? No problem! We've got you covered with a custom OpinAds listing page that will be connected to your Facebook Advertisement."
        buttonText="View a Sample Listing"
        image={buildImage}
      />
      <FeatureStrip
        headline="Expand Your Reach"
        paragraph="We will advertise your listing to thousands of people using Facebook Ads. We use tried and true settings that deliver high leads for little cost."
        buttonText="Get Started Now!"
        image={advertiseImage}
      />
      <hr/><br/>
      <HomeForm/>
      </div>
    );
  }
}

export default App;
