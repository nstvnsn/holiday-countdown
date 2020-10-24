import React, { useEffect, useState } from "react";

import Holiday from "./Holiday";

import holidayData from "../data/dates.json";
import "../css/BeliefGroup.css";

function BeliefGroup(props) {
  const [active, setActive] = useState(false);
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    let listOfKeys = Object.keys(holidayData[props.belief]);
    let nameTitleList = listOfKeys.map((key) => {
      return [key, holidayData[props.belief][key].name];
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
      <span className="beliefGroupTitle" id="holidayIDList">
        {props.belief}
      </span>
      <ul
        aria-labelledby="holidayIDList"
        className="holidayList"
        style={{ cursor: "default" }}
      >
        {holidayList}
      </ul>
    </li>
  );
}

export default BeliefGroup;
