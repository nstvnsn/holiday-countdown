import React, { useEffect, useState } from "react";
import "../dateTimeClock.css";

function DateTimeClock() {
  let currYear = new Date().getFullYear();
  let xmas = new Date(`12/25/${currYear}`);

  let [timeRemaining, setTimeRemaining] = useState(0);
  let [days, setDays] = useState("");
  let [hours, setHours] = useState("");
  let [minutes, setMinutes] = useState("");
  let [seconds, setSeconds] = useState("");

  useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      setTimeRemaining(xmas - newDate);
    }, 1000);
    let { days, hours, minutes, seconds } = calcTime();
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
    //console.log(new Date());

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
      return { days, hours, minutes, seconds };
    }
  }, [timeRemaining, xmas]);

  return (
    <div className="DateTimeClock">
      <div id="countdownTimer">
        <span>Days: {days}</span>
        <span>Hours: {hours}</span>
        <span>Minutes: {minutes}</span>
        <span>Seconds: {seconds}</span>
      </div>
    </div>
  );
}

export default DateTimeClock;
