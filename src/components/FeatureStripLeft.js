import React from 'react'
import "../styles/featureStripLeft.css"


const FeatureStripLeft = (props) => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 imageWrap">
          <img className="stripImage" src={props.image}/>
        </div>
        <div className="col-sm-12 col-md-6 captionWrap">
          <h2>{props.headline}</h2>
          <p>{props.paragraph}</p>
          <button type="button" className="btn btn-primary featureStripButtonL">{props.buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default FeatureStripLeft
