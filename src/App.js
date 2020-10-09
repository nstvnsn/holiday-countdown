import React, { useEffect, useState } from "react";
import "./App.css";

import DateTimeClock from "./components/DateTimeClock";
import HolidaySelectPane from "./components/holidaySelectPane.js";

function App() {
  // eslint-disable-next-line
  let [belief, setBelief] = useState("PAGAN");
  // eslint-disable-next-line
  let [holiday, setHoliday] = useState("samhain");
  useEffect(() => {}, []);

  function handleHolidayChange(e, holiday) {
    console.log(e);
    console.log(holiday);
  }

  return (
    <div className="App">
      <HolidaySelectPane
        belief={belief}
        holiday={holiday}
        onHolidayChange={handleHolidayChange}
      />
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
