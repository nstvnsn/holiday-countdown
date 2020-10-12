import React, { useEffect, useState } from "react";
import "./App.css";

import DateTimeClock from "./components/dateTimeClock.js";
import HolidaySelectPane from "./components/holidaySelectPane.js";

import dates from "./data/dates.json";

function App() {
  // eslint-disable-next-line
  let [belief, setBelief] = useState("PAGAN");
  // eslint-disable-next-line
  let [holiday, setHoliday] = useState("samhain");
  useEffect(() => {}, []);

  function handleHolidayChange(newBelief, newHoliday) {
    setBelief(newBelief);
    setHoliday(newHoliday);
  }

  return (
    <div className="App">
      <div className="holidaySelectPaneWrapper">
        <HolidaySelectPane
          belief={belief}
          holiday={holiday}
          eventHandlers={{ holidayChange: handleHolidayChange }}
        />
      </div>
      <div className="main">
        <h1 className="App-Header">Days Until:</h1>
        <h2 className="App-Header">
          {holiday[0].toUpperCase() + holiday.slice(1)}
        </h2>
        <DateTimeClock belief={belief} holiday={holiday} />
      </div>
      <footer className="App-Footer"></footer>
    </div>
  );
}

export default App;
