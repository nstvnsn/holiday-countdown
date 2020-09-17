import React from "react";
import "./App.css";

import DateTimeClock from "./components/DateTimeClock";
import HolidaySelectPane from "./components/holidaySelectPane.js";

function App() {
  return (
    <div className="App">
      <div className="holidaySelectPane">
        <HolidaySelectPane activeHoliday="samhain" />
      </div>
      <div className="main">
        <h1 className="App-Header">Holiday Countdown</h1>
        <DateTimeClock holiday="samhain" />
      </div>
      <footer className="App-Footer"></footer>
    </div>
  );
}

export default App;
