import React, { Component } from "react";
import Navigation from './components/Navigation.js'
import Carousel from './components/Carousel.js'
import HomeForm from './components/HomeForm.js'
import FeatureStrip from './components/FeatureStrip.js'
import FeatureStripLeft from './components/FeatureStripLeft.js'
import Pricing from './components/Pricing.js'
import SignIn from './components/SignIn.js'
import Register from './components/Register.js'
import PropertyPage from './PropertyPage.js'
import Jumbotron from './components/Jumbotron.js'
import FullScreenHeader from './components/FullScreenHeader.js'

import logo from "./images/OpinAdsLogo.png";
import calculateImage from "./images/fullScreenHeader_calculate.png";
import launchFeatureImage from "./images/fullScreenHeader_launch.png";
import searchBarImage from "./images/fullScreenHeader_searchBar.png";
import "./PropertyPage.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">

      { this.state.route === 'home'
      ? <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        <FullScreenHeader headerTitle="Opin Ads" headerMaintitle="Launch your business today!"/>
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
          buttonFunction="() => onRouteChange('register')"
        />
        <a name="pricing">
          <Jumbotron/>
        </a>
        <a name="contact">
          <HomeForm/>
        </a>
      </div>
      : ( this.state.route === 'signIn' ? <SignIn onRouteChange={this.onRouteChange}/> : <PropertyPage onRouteChange={this.onRouteChange}/> )}
      </div>
    );
  }
}

export default App;
