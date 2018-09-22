import React from 'react'
import image from "../images/advertise.jpg"
import "../styles/featureStrip.css"

function FeatureStripLeft(props){
  return(
    <div className="stripWrap">
      <img className="stripImage" src={props.image}/>
      <div className="captionWrap">
        <h2>{props.headline}</h2>
        <p>{props.paragraph}</p>
        <button type="button" className="btn btn-primary featureStripButton">{props.buttonText}</button>
      </div>
    </div>
  )
}

export default FeatureStripLeft
