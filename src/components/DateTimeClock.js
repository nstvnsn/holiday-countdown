import React, { useEffect, useState } from "react";
import moment from "moment";

let currYear = new Date().getFullYear();

function DateTimeClock(props) {
  let [holiday, setHoliday] = useState(new Date(`12/25/${currYear}`));
  let [timeRemaining, setTimeRemaining] = useState(holiday - new Date());
  let [effectTimeout, setEffectTimeout] = useState(0);
  let [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(calcTime, [timeRemaining]);

  useEffect(() => {
    if (!effectTimeout) {
      setEffectTimeout(
        setTimeout(() => {
          const newDate = new Date();
          setTimeRemaining(holiday - newDate);
          setEffectTimeout(0);
        }, 1000)
      );
    } // eslint-disable-next-line
  }, [timeUnits]);

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
