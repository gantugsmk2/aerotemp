import React from "react";
import "./App.css";

const LightsAndClimate = ({ onClick }) => {
  return (
    <div className="section lights-and-climate" onClick={onClick}>
      <div className="section-header">
        <h2>Lights & Climate</h2>
      </div>
      <div className="section-content">
        <p>Control your home's lighting and climate settings effortlessly.</p>
        <ul>
          <li>Adjust room temperatures</li>
          <li>Set mood lighting</li>
          <li>Save energy with smart controls</li>
        </ul>
      </div>
    </div>
  );
};

export default LightsAndClimate;
