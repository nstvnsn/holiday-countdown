import React, { useEffect, useState } from "react";

import holidayDates from "../data/dates.json";
import Holiday from "./Holiday.js";

import "../css/BeliefGroup.css";

function BeliefGroup(props) {
  let [holidayList, setHolidayList] = useState([]);
  let [active, setActive] = useState(false);

  useEffect(() => {
    let listOfKeys = Object.keys(holidayDates[props.belief]);

    let nameTitleList = listOfKeys.map((key) => {
      return [key, holidayDates[props.belief][key].name];
    });

    setHolidayList(
      nameTitleList.map((kv, i) => {
        return (
          <li className="holidayListItem" key={i}>
            <Holiday
              id={i}
              belief={props.belief}
              active={kv[0] === props.holiday}
              holidayID={kv[0]}
              holidayTitle={kv[1]}
              eventHandlers={{
                holidayChange: props.eventHandlers.holidayChange,
              }}
            />
          </li>
        );
      })
    );
  }, [props.belief, props.eventHandlers.holidayChange, props.holiday]);

  const beliefGroupClickHandler = (e) => {
    if (["beliefGroup-Active", "beliefGroup"].includes(e.target.className)) {
      setActive(!active);
    }
  };

  return (
    <li
      className={(active && "beliefGroup-Active") || "beliefGroup"}
      onClick={(e) => beliefGroupClickHandler(e)}
    >
      <span className="beliefGroupTitle" style={{ cursor: "pointer" }}>
        {props.belief}
      </span>
      <ul className="holidayList" style={{ cursor: "default" }}>
        {holidayList}
      </ul>
    </li>
  );
}

export default BeliefGroup;
