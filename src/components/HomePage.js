import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../components/Navigation.js";
import HomeForm from "../components/HomeForm.js";
import FeatureStrip from "../components/FeatureStrip.js";
import FeatureStripLeft from "../components/FeatureStripLeft.js";
import SignIn from "../components/SignIn.js";
import Jumbotron from "../components/Jumbotron.js";
import FullScreenHeader from "../components/FullScreenHeader.js";

import calculateImage from "../images/fullScreenHeader_calculate.png";
import launchFeatureImage from "../images/fullScreenHeader_launch.png";
import searchBarImage from "../images/fullScreenHeader_searchBar.png";
import "../styles/homePage.css";

class App extends Component {
  render() {
    return (
      <Fragment className="homePage">
        <Navigation onRouteChange={this.onRouteChange} />
        <FullScreenHeader
          headerTitle="Opin Ads"
          headerMaintitle="Increase your business today!"
          // headerMaintitle="Drive more business today!"
          headerSubText="with targeted Facebook advertisements to increase conversations and conversions."
        />
        <a name="features">
          <FeatureStrip
            onRouteChange={this.onRouteChange}
            headline="Simplifying Facebook Lead Generation"
            paragraph="We will take care of all the grunt work, and using your listings, generate daily Facebook buyer leads."
            buttonText="See An Example!"
            image={searchBarImage}
            id="features"
          />
        </a>
        <FeatureStripLeft
          headline="Your Very Own Listing Page"
          paragraph="Don't have a page for your new listing? No problem! We've got you covered with a custom OpinAds listing page that will be connected to your Facebook Advertisement."
          buttonText="View a Sample Listing"
          image={calculateImage}
        />
        <FeatureStrip
          onRouteChange={this.onRouteChange}
          headline="Don't have a business page?"
          paragraph="Don't worry! We'll get you setup with everything you need to get Facebook ads up and running."
          buttonText="Get Started Now!"
          image={launchFeatureImage}
          buttonFunction="() => onRouteChange('signIn')"
        />
        <a name="pricing">
          <Jumbotron />
        </a>
        <a name="contact">
          <HomeForm />
        </a>
      </Fragment>
    );
  }
}

export default App;
