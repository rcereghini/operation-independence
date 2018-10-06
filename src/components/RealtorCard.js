import React from "react";
import "../styles/realtorCard.css";

function RealtorCard(props) {
  return (
    <div className="realtorCard">
      <img src={props.picName} className="headshot" />
      <div className="cardInfo">
        <p className="name">{props.name}</p>
        <p>{props.profession}</p>
        <p>{props.idNum}</p>
        <a href={props.tel}>
          <p>{props.phone}</p>
        </a>
        <a href={props.mailto}>
          <p className="emailAdjust">{props.email}</p>
        </a>
      </div>
    </div>
  );
}

export default RealtorCard;
