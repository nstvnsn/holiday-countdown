import React, { useEffect, useState } from "react";

import holidayDates from "../data/dates.json";

import "../css/dateTimeClock.css";

function DateTimeClock(props) {
  let [holiDate, setHoliDate] = useState(0);
  let [timeRemaining, setTimeRemaining] = useState(0);
  let [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let date, dateObj;

    date = holidayDates[props.belief][props.holiday].date;
    date += "/" + new Date().getFullYear();
    dateObj = new Date(date);
    setHoliDate(dateObj);
  }, [props.belief, props.holiday]);

  useEffect(() => {
    let clockTick = setInterval(() => {
      let newDate = new Date();
      setTimeRemaining(holiDate - newDate);
    }, 1000);
    return () => clearInterval(clockTick);
  }, [holiDate]);

  useEffect(calcTime, [timeRemaining]);

  function calcTime() {
    let timeInSec = {
      day: 24 * 60 * 60,
      hour: 60 * 60,
      minute: 60,
    };

    let secondsRemaining = timeRemaining / 1000;
    let days, hours, minutes, seconds;

    days = Math.floor(secondsRemaining / timeInSec.day);
    secondsRemaining -= Math.floor(timeInSec.day * days);

    hours = Math.floor(secondsRemaining / timeInSec.hour);
    secondsRemaining -= Math.floor(timeInSec.hour * hours);

    minutes = Math.floor(secondsRemaining / timeInSec.minute);
    secondsRemaining -= Math.floor(timeInSec.minute * minutes);

    seconds = Math.floor(secondsRemaining);

    setTimeUnits({ days, hours, minutes, seconds });
  }

  return (
    <div className="DateTimeClock">
      <div className="countdownTimer">
        <span>
          <p>{timeUnits["days"]}</p> <p>Days</p>
        </span>
        <span>
          <p>{timeUnits["hours"]}</p> <p>Hours</p>
        </span>
        <span>
          <p>{timeUnits["minutes"]}</p> <p>Minutes</p>
        </span>
        <span>
          <p>{timeUnits["seconds"]}</p> <p>Seconds</p>
        </span>
      </div>
    </div>
  );
}

export default DateTimeClock;
