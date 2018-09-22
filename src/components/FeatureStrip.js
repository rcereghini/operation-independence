import React from 'react'
import "../styles/featureStrip.css"

function FeatureStrip(props){
  return(
    <div className="stripWrap">
      <div className="captionWrap">
        <h2>{props.headline}</h2>
        <p>{props.paragraph}</p>
        <button type="button" className="btn btn-primary featureStripButton">{props.buttonText}</button>
      </div>
      <img className="stripImage" src={props.image}/>
    </div>
  )
}

export default FeatureStrip
