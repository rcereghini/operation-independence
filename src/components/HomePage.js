import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../components/Navigation.js";
import HomeForm from "../components/HomeForm.js";
import FeatureStrip from "../components/FeatureStrip.js";
import FeatureStripLeft from "../components/FeatureStripLeft.js";
import SignIn from "../components/SignIn.js";
import Jumbotron from "../components/Jumbotron.js";
import FullScreenHeader from "../components/FullScreenHeader.js";
import Pricing from "../components/Pricing.js";

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
          headerMaintitle="How can Facebook Ads help me?"
          // headerMaintitle="Drive more business today!"
          headerSubText="Facebook is one of the most powerful platforms in the world with over 190 million active accounts in the USA
alone! Even more powerful is their advertising abilities with advanced geographic, demographic and interest
based targeting. We find potential buyers in your targeted areas using the most modern methods available and connect them to you."
        />
        <div className="featureWrap">
          <a className="features">
            <FeatureStrip
              onRouteChange={this.onRouteChange}
              headline="Get more leads!"
              paragraph="Want more leads to call everyday? OpinAds
  Lead Generation will create a custom tailored
  ad do drive traffic from your preferred area to
  your personal IDX enabled site. The lead will be
  collected on the front end and sent to you via
  text and email."
              buttonText="See An Example!"
              image={searchBarImage}
              id="features"
            />
          </a>
          <FeatureStripLeft
            headline="Get more conversations!"
            paragraph="Want to start more conversations? Have
potential buyers ask you questions directly
through Facebook about one of your listings
or general listings in the targeted area!
OpinAds Messenger will start a dialogue
instantly! When the potential buyer clicks on
the ad it will start chatting with them right
away! This way you can avoid non answers and
constant follow up to get the lead qualified or
disqualified faster!"
            buttonText="View a Sample Listing"
            image={calculateImage}
          />
          <FeatureStrip
            onRouteChange={this.onRouteChange}
            headline="Get more clicks!"
            paragraph="Already have a great website but need more
traffic to capture those leads? OpinAds Traffic
is for you! We will create a custom ad to drive
more buyer leads to your website. Using your
own website / CRMs capture capabilities
we will drive more potential buyers to your
website to greatly increase your conversions. "
            buttonText="Get Started Now!"
            image={launchFeatureImage}
            buttonFunction="() => onRouteChange('signIn')"
          />
        </div>
        <a name="pricing">
          <Pricing
            title1="-Lead Generation Ads-"
            title2="-Messenger Ads-"
            body2="Whats Included:
• Custom Advertisement geared towards getting potential
buyers to message you about listings in their area.
• Average Messages Per Month - 15+*
• Instant conversation through Facebook Messenger with 3
Custom F.A.Q. Responses tailored to your business.
•
Need a Facebook business page? We can help! - Click here to find out
more!"
            title3="-Website Traffic Ads-"
            body3="Whats Included:
• Custom Advertisement geared towards getting potential
buyers to visit your already existing web site about
listings in their area to sign up for your IDX.
• Average Clicks Per Month - 100+*
• Instant conversation through Facebook Messenger with 3
Custom F.A.Q. Responses tailored to your business.
•
Need a Facebook business page? We can help! - Click here to find out
more!"
            buttonText1="PLACEHOLDER"
            buttonText2="PLACEHOLDER"
            buttonText3="PLACEHOLDER"
          />
          {/* <Jumbotron /> */}
        </a>
        <a name="contact">
          <HomeForm />
        </a>
      </Fragment>
    );
  }
}

export default App;
