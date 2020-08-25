import React from "react";
import "./App.css";

import DateTimeClock from "./components/DateTimeClock";
import HolidaySelectPane from "./components/holidaySelectPane.js";

function App() {
  return (
    <div className="App">
      <header className="App-Header">Holiday Countdown</header>
      <div className="holidaySelectPane">
        <HolidaySelectPane />
      </div>
      <div className="main">
        <DateTimeClock />
      </div>
      <footer className="App-Footer"></footer>
    </div>
  );
}

export default App;
