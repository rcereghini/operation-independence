import React from "react";
import "../styles/list.css";

function List(props) {
  return (
    <table id="list">
      <tr>
        <td className="leftSideTD">LIST PRICE</td>
        <td>{props.listPrice}</td>
      </tr>
      <tr>
        <td className="leftSideTD">BEDROOMS</td>
        <td>{props.bedrooms}</td>
      </tr>
      <tr>
        <td className="leftSideTD">BATHROOMS</td>
        <td>{props.bathrooms}</td>
      </tr>
      <tr>
        <td className="leftSideTD">LOCATION</td>
        <td>{props.location}</td>
      </tr>
      <tr>
        <td className="leftSideTD">SQUARE FEET</td>
        <td>{props.squareFeet}</td>
      </tr>
      <tr>
        <td className="leftSideTD">LOT SIZE</td>
        <td>{props.lotSize}</td>
      </tr>
      <tr>
        <td className="leftSideTD">YEAR BUILT</td>
        <td>{props.yearBuilt}</td>
      </tr>
      <tr>
        <td className="leftSideTD">PROPERTY TYPE</td>
        <td>{props.propertyType}</td>
      </tr>
      <tr>
        <td className="leftSideTD">LISTING ID</td>
        <td>{props.listingId}</td>
      </tr>
    </table>
  );
}

export default List;
