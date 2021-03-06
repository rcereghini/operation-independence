import React from "react";
import "../styles/featureStrip.css";

const FeatureStrip = (props, { onRouteChange }) => {
  return (
    <div className="container feature-strip featureStripLeft">
      <div className="row featureRowR">
        <div className="col-sm-12 col-md-8 featureStrip__caption-wrap">
          <h2>{props.headline}</h2>
          <p>{props.paragraph}</p>
          <button
            type="button"
            className="btn btn-primary feature-strip-button"
            onClick={props.buttonFunction}
          >
            {props.buttonText}
          </button>
        </div>
        <div className="col-md-4 imageWrap">
          <img className="strip-image" src={props.image} />
        </div>
      </div>
    </div>
  );
};

export default FeatureStrip;
