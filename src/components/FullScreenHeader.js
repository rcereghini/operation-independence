import React from "react";
import launchImage from "../images/startUp.png";
import logo from "../images/OpinAdsLogo.png";
import "../styles/fullScreenHeader.css";

const FullScreenHeader = props => {
  return (
    <div className="fullScreen-display">
      <div className="fullScreen-card">
        <div>
          <img src={launchImage} className="fullScreen-card-header-image" />
        </div>
        <h2 className="fullScreenHeader__main-title">
          {props.headerMaintitle}
        </h2>
        <p className="fullScreenHeader__sub-title">{props.headerSubText}</p>
        <div className="fullScreenHeader__button-container row">
          <form className="form-button-wrap" action="/">
            <button
              type="submit"
              className="btn btn-primary info-button learn-more-button"
            >
              Learn More
            </button>
          </form>
          <form className="form-button-wrap" action="/signin">
            <button className="btn btn-success info-button take-off-button">
              Take Off!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullScreenHeader;
