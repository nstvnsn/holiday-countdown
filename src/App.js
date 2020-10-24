import React, { useState } from "react";

import DateTimeClock from "./components/DateTimeClock";
import HolidaySelectPane from "./components/HolidaySelectPane";
import HolidayTitle from "./components/HolidayTitle";

import "./App.css";

function App() {
  const [belief, setBelief] = useState("PAGAN");
  const [holiday, setHoliday] = useState("samhain");

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
        <h1 className="App-Header">Countdown:</h1>
        <h2 className="holidayTitle">
          <HolidayTitle belief={belief} holiday={holiday} />
        </h2>
        <DateTimeClock belief={belief} holiday={holiday} />
      </div>
      <footer className="App-Footer"></footer>
    </div>
  );
}

export default App;
