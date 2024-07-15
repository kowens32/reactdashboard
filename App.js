// src/TrafficMonitor.js
import React from 'react';
import './TrafficMonitor.css';

const getColor = (traffic) => {
  if (traffic >= 0 && traffic <= 10) return 'red';
  if (traffic > 10 && traffic <= 50) return 'yellow';
  if (traffic > 50) return 'green';
  return 'gray';
};

const getTileColor = (eastColor, westColor) => {
  if (eastColor === 'green' || westColor === 'green') return 'green';
  if (eastColor === 'yellow' || westColor === 'yellow') return 'yellow';
  return 'red';
};

const TrafficMonitor = ({ eastTraffic, westTraffic, appName }) => {
  const eastColor = getColor(eastTraffic);
  const westColor = getColor(westTraffic);
  const tileColor = getTileColor(eastColor, westColor);

  return (
    <div className="traffic-monitor">
      <div className="tile" style={{ backgroundColor: tileColor }}>
        <h2>{appName}</h2>
        <div className="region">
          <span>East:</span>
          <div className="indicator" style={{ backgroundColor: eastColor }}></div>
        </div>
        <div className="region">
          <span>West:</span>
          <div className="indicator" style={{ backgroundColor: westColor }}></div>
        </div>
      </div>
    </div>
  );
};

export default TrafficMonitor;
