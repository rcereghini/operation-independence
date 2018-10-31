import React from "react";
import "../styles/userBackend.css";

const UserBackend = props => {
  return (
    <div>
      <h2>Welcome {props.name}!</h2>
    </div>
  );
};

export default UserBackend;
