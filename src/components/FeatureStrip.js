import React from 'react'
import "../styles/featureStrip.css"

const FeatureStrip = (props, { onRouteChange }) => {
  return(
    <div className="container">
      <div className="row featureRowR">
        <div className="col-sm-12 col-md-6 captionWrap">
          <h2>{props.headline}</h2>
          <p>{props.paragraph}</p>
          <button type="button" className="btn btn-primary featureStripButton" onClick={props.buttonFunction}>{props.buttonText}</button>
        </div>
        <div className="col-md-6 imageWrap">
          <img className="stripImage" src={props.image}/>
        </div>
      </div>
    </div>
  )
}

export default FeatureStrip
