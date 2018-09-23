import React from 'react'
import image from "../images/advertise.jpg"
import "../styles/featureStripLeft.css"

function FeatureStripLeft(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4">
          <img className="stripImageL" src={props.image}/>
        </div>
        <div className="col-12 col-sm-6 col-md-8 captionWrapL">
          <h2>{props.headline}</h2>
          <p>{props.paragraph}</p>
          <button type="button" className="btn btn-primary featureStripButtonL">{props.buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default FeatureStripLeft
