import React, { useState } from "react";
import "./App.css";
import DailySummary from "./DailySummary";
import HomeSecurity from "./HomeSecurity";
import LightsAndClimate from "./LightsAndClimate";
import OtherDevices from "./OtherDevices";
import Weather from "./Weather";

function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <DailySummary onClick={() => handleClick("dailySummary")} />
      <HomeSecurity onClick={() => handleClick("homeSecurity")} />
      <LightsAndClimate onClick={() => handleClick("lightsAndClimate")} />
      <OtherDevices onClick={() => handleClick("otherDevices")} />
      <Weather onClick={() => handleClick("weather")} />

      {selectedSection === "dailySummary" && (
        <div className="section-content">
          <h3>Daily Summary Content</h3>
          <p>Here's your daily overview:</p>
          <button>View Calendar events</button>
          <button>Check Weather forecast</button>
          <button>Task reminders</button>
        </div>
      )}
      {selectedSection === "homeSecurity" && (
        <div className="section-content">
          <h3>Home Security Content</h3>
          <p>Monitor and secure your home with the latest technology:</p>
          <button>Live camera feeds</button>
          <button>Motion detection alerts</button>
          <button>Smart doorbell notifications</button>
        </div>
      )}
      {selectedSection === "lightsAndClimate" && (
        <div className="section-content">
          <h3>Lights & Climate Content</h3>
          <p>Control your home's lighting and climate settings effortlessly:</p>
          <button>Adjust room temperatures</button>
          <button>Set mood lighting</button>
          <button>Save energy with smart controls</button>
        </div>
      )}
      {selectedSection === "otherDevices" && (
        <div className="section-content">
          <h3>Other Devices Content</h3>
          <p>Explore and manage other smart devices in your home:</p>
          <button>Smart appliances</button>
          <button>Entertainment systems</button>
          <button>Home automation accessories</button>
        </div>
      )}
      {selectedSection === "weather" && (
        <div className="section-content">
          <h3>Weather Content</h3>
          <p>Stay informed about the current weather conditions:</p>
          <button>Temperature and humidity levels</button>
          <button>Weekly forecast</button>
          <button>Severe weather alerts</button>
        </div>
      )}
    </div>
  );
}

export default App;
