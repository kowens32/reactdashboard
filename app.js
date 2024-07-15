import React, { useState } from 'react';
import './App.css';

function App() {
  const [percentages, setPercentages] = useState({
    app1West: 50,
    app1East: 50,
    app2West: 10,
    app2East: 20,
    app3West: 0,
    app3East: 0,
  });

  const setTileColor = (percentage) => {
    if (percentage === 0) {
      return 'red';
    } else if (percentage > 0 && percentage <= 20) {
      return 'yellow';
    } else {
      return 'green';
    }
  };

  return (
    <div className="app-container">
      <div className="app">
        <div className="title">App 1</div>
        <div className="region">
          <div
            className="tile"
            style={{ backgroundColor: setTileColor(percentages.app1West) }}
          >
            West {percentages.app1West}%
          </div>
          <div
            className="tile"
            style={{ backgroundColor: setTileColor(percentages.app1East) }}
          >
            East {percentages.app1East}%
          </div>
        </div>
      </div>
      <div className="app">
        <div className="title">App 2</div>
        <div className="region">
          <div
            className="tile"
            style={{ backgroundColor: setTileColor(percentages.app2West) }}
          >
            West {percentages.app2West}%
          </div>
          <div
            className="tile"
            style={{ backgroundColor: setTileColor(percentages.app2East) }}
          >
            East {percentages.app2East}%
          </div>
        </div>
      </div>
      <div className="app">
        <div className="title">App 3</div>
        <div className="region">
          <div
            className="tile"
            style={{ backgroundColor: setTileColor(percentages.app3West) }}
          >
            West {percentages.app3West}%
          </div>
          <div
            className="tile"
            style={{ backgroundColor: setTileColor(percentages.app3East) }}
          >
            East {percentages.app3East}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
