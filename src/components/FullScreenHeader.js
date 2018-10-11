import React from "react";
import navLogo from "../images/OpinAdsLogo.png";
import "../styles/fullScreenHeader.css";

function FullScreenHeader(props) {
  return (
    <div class="fullScreenDisplay">
      <div class="fullScreenCard">
        <h1>OpinAds</h1>
        <h2>Become a Founder Today!</h2>
        <div class="headerButtonWrap">
          <button class="btn btn-success getStartedButton">Get Started Now</button>
          <button class="btn btn-primary learnMoreButton">Learn More Now</button>
        </div>
      </div>
    </div>
  );
}

export default FullScreenHeader;
