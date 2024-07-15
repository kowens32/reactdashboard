// src/App.js
import React from 'react';
import TrafficMonitor from './TrafficMonitor';

function App() {
  const eastTraffic = 45; // Example traffic percentage for East
  const westTraffic = 60; // Example traffic percentage for West
  const appName = "My Application";

  return (
    <div className="App">
      <TrafficMonitor eastTraffic={eastTraffic} westTraffic={westTraffic} appName={appName} />
    </div>
  );
}

export default App;
