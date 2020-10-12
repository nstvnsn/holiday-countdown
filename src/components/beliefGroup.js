import React, { useEffect, useState } from "react";

import holidayDates from "../data/dates.json";
import Holiday from "../components/holiday.js";

import "../css/beliefGroup.css";

function BeliefGroup(props) {
  let [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    let listOfKeys = Object.keys(holidayDates[props.belief]);

    let nameTitleList = listOfKeys.map((key) => {
      return [key, holidayDates[props.belief][key].name];
    });

    setHolidayList(
      nameTitleList.map((kv, i) => {
        let holidayComponent;
        if (kv[0] === props.holiday) {
          holidayComponent = (
            <li key={i}>
              <Holiday
                id={i}
                belief={props.belief}
                active={true}
                holidayID={kv[0]}
                holidayTitle={kv[1]}
                eventHandlers={{
                  holidayChange: props.eventHandlers.holidayChange,
                }}
              />
            </li>
          );
        } else {
          holidayComponent = (
            <li key={i} className="holidayListItem">
              <Holiday
                id={i}
                belief={props.belief}
                active={false}
                holidayID={kv[0]}
                holidayTitle={kv[1]}
                eventHandlers={{
                  holidayChange: props.eventHandlers.holidayChange,
                }}
              />
            </li>
          );
        }
        return holidayComponent;
      })
    );
  }, [
    props.active,
    props.belief,
    props.eventHandlers.holidayChange,
    props.holiday,
  ]);

  if (props.active) {
    return (
      <li className="beliefGroup-Active">
        <span>{props.belief}</span>
        <ul className="holidayList">{holidayList}</ul>
      </li>
    );
  } else {
    return (
      <li className="beliefGroup">
        <span>{props.belief}</span>
        <ul className="holidayList">{holidayList}</ul>
      </li>
    );
  }
}

export default BeliefGroup;
