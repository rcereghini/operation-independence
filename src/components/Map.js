import React from "react";
import "../styles/map.css";

function Map(props) {
  return (
    <iframe
      src={props.mapSource}
      width="450"
      height="450"
      className="map"
      frameborder="0"
      allowfullscreen
    />
  );
}

export default Map;
