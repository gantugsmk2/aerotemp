import React from "react";
import "./App.css";

const OtherDevices = ({ onClick }) => {
  return (
    <div className="section other-devices" onClick={onClick}>
      <div className="section-header">
        <h2>Other Devices</h2>
      </div>
      <div className="section-content">
        <p>Explore and manage other smart devices in your home.</p>
        <ul>
          <li>Smart appliances</li>
          <li>Entertainment systems</li>
          <li>Home automation accessories</li>
        </ul>
      </div>
    </div>
  );
};

export default OtherDevices;
