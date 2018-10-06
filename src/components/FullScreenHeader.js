import React from "react";
import navLogo from "../images/OpinAdsLogo.png";
import "../styles/fullScreenHeader.css";

function FullScreenHeader(props) {
  return (
    <div class="fullScreenDisplay" background={navLogo}>
      <div class="fullScreenCard">
        <h1>OpinAds</h1>
        <h2>Become a Founder Today!</h2>
        <button>Learn More</button>        <button>Learn More</button>

      </div>
    </div>
  );
}

export default FullScreenHeader;
