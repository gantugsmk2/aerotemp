import React from "react";
import "./App.css";

const DailySummary = ({ onClick }) => {
  return (
    <div className="section daily-summary" onClick={onClick}>
      <div className="section-header">
        <h2>Daily Summary</h2>
      </div>
      <div className="section-content">
        <p>Check out your daily summary for important updates.</p>
        <ul>
          <li>Calendar events</li>
          <li>Weather forecast</li>
          <li>Task reminders</li>
        </ul>
      </div>
    </div>
  );
};

export default DailySummary;
