import React from "react";
import "./Subheader.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

function Subheader({ location }) {
  const navOptions = [
    "Today's Deal",
    "Customer Service",
    "Gift Cards",
    "Registry",
    "Sell",
  ];

  return (
    <div className="subheader">
      <div className="subheader__content">
        <div className="subheader__location">
          <div className="subheader__locationIcon">
            <LocationOnOutlinedIcon />
          </div>
          <div className="subheader__locationContent">
            <p>Deliver to</p>
            <strong>{location}</strong>
          </div>
        </div>
        <div className="subheader__nav">
          {navOptions.map((_, i) => (
            <a href="#">
              <div className="subheader__navOption">
                <p>{navOptions[i]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subheader;
