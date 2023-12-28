import React from "react";
import "./App.css";
import homeSecurityImage from "./images/img.jpg"; // Replace with actual image

const HomeSecurity = ({ onClick }) => {
  return (
    <div className="section home-security" onClick={onClick}>
      <div className="section-header">
        <h2>Home Security</h2>
      </div>
      <div className="section-content">
        <img src={homeSecurityImage} alt="Home Security" />
        <p>Ensure the safety of your home with the latest security features.</p>
        <ul>
          <li>Live camera feeds</li>
          <li>Motion detection alerts</li>
          <li>Smart doorbell notifications</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeSecurity;
