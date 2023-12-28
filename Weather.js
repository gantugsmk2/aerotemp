import React from "react";
import "./App.css";

const Weather = ({ onClick }) => {
  return (
    <div className="section weather" onClick={onClick}>
      <div className="section-header">
        <h2>Weather</h2>
      </div>
      <div className="section-content">
        <p>Stay informed about the current weather conditions.</p>
        <ul>
          <li>Temperature and humidity levels</li>
          <li>Weekly forecast</li>
          <li>Severe weather alerts</li>
        </ul>
      </div>
    </div>
  );
};

export default Weather;
