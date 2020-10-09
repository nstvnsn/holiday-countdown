import React, { useEffect, useState } from "react";

import holidayDates from "../data/dates.json";
import Holiday from "../components/holiday.js";

function BeliefGroup(props) {
  let [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    let listOfKeys = Object.keys(holidayDates[props.belief]);

    let nameTitleList = listOfKeys.map((key) => {
      return [key, holidayDates[props.belief][key].name];
    });

    setHolidayList(
      nameTitleList.map((kv, i) => {
        if (kv[0] === props.holiday) {
          return (
            <Holiday
              id={i}
              key={i}
              active={true}
              holidayID={kv[0]}
              holidayTitle={kv[1]}
            />
          );
        } else {
          return (
            <Holiday
              id={i}
              key={i}
              active={false}
              holidayID={kv[0]}
              holidayTitle={kv[1]}
            />
          );
        }
      })
    );
  }, [props.active, props.belief, props.holiday]);

  useEffect(() => {}, []);

  if (props.active) {
    return (
      <li className="beliefGroup-Active">
        <span>{props.belief}</span>
        <ul>{holidayList}</ul>
      </li>
    );
  } else {
    return (
      <li className="beliefGroup">
        <span>{props.belief}</span>
        <ul>{holidayList}</ul>
      </li>
    );
  }
}

// TODO
// Handle this differently. I need to setActive(true) on each holiday that is clicked,
// while invoking setActive(false) on the currently active holiday
document.addEventListener("click", (e) => {
  let element, parent, inactive, active;
  console.log(e.target.className);

  inactive = e.target.className === "beliefGroup";
  active = e.target.className === "beliefGroup-Active";
  if (active || inactive) {
    parent = e.target;
    element = e.target.lastChild;

    if (inactive) {
      parent.className = "beliefGroup-Active";
    } else {
      parent.className = "beliefGroup";
    }
  }
});

export default BeliefGroup;
