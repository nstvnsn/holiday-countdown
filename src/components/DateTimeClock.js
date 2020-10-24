import React, { useEffect, useRef, useState } from "react";

import holidayDates from "../data/dates.json";

import "../css/DateTimeClock.css";
import TimeUnit from "../components/TimeUnit";

function DateTimeClock(props) {
  let [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const holiDateRef = useRef();
  const timeRemainingRef = useRef();
  const requestAnimationFrameRef = useRef();

  function calcTime() {
    let timeInSec = {
      day: 24 * 60 * 60,
      hour: 60 * 60,
      minute: 60,
    };

    let secondsRemaining = timeRemainingRef.current / 1000;
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

  useEffect(() => {
    requestAnimationFrameRef.current = requestAnimationFrame(animate);

    function animate(time) {
      timeRemainingRef.current = holiDateRef.current - new Date();
      calcTime();
      requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestAnimationFrameRef.current);
  }, []);

  useEffect(() => {
    holiDateRef.current = getHolidayDate();

    function getHolidayDate() {
      const hDate = new Date(
        holidayDates[props.belief][props.holiday].date +
          "/" +
          new Date().getFullYear()
      );
      const currDate = new Date();

      if (hDate - currDate < 0) {
        hDate.setFullYear(hDate.getFullYear() + 1);
      }

      return hDate;
    }
  }, [props.belief, props.holiday]);

  return (
    <div className="DateTimeClock">
      <div className="countdownTimer">
        <span>
          <TimeUnit time={timeUnits.days} unit={"Days"} />
        </span>
        <span>
          <TimeUnit time={timeUnits.hours} unit={"Hours"} />
        </span>
        <span>
          <TimeUnit time={timeUnits.minutes} unit={"Minutes"} />
        </span>
        <span>
          <TimeUnit time={timeUnits.seconds} unit={"Seconds"} />
        </span>
      </div>
    </div>
  );
}

export default DateTimeClock;
