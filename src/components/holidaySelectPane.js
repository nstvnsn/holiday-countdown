import React, { useEffect, useState } from "react";

import BeliefGroup from "../components/beliefGroup";
import holidayDates from "../data/dates.json";

import "../css/holidaySelectPane.css";

function HolidaySelectPane(props) {
  let [groupList, setGroupList] = useState([]);

  useEffect(() => {
    let listOfKeys = Object.keys(holidayDates);

    setGroupList(
      listOfKeys.map((key, i) => {
        let listItem;
        if (props.belief === key) {
          listItem = (
            <BeliefGroup
              active={true}
              holiday={props.holiday}
              belief={key}
              key={i}
              eventHandlers={{
                holidayChange: props.eventHandlers.holidayChange,
              }}
            />
          );
        } else {
          listItem = (
            <BeliefGroup
              active={false}
              holiday={props.holiday}
              belief={key}
              key={i}
              eventHandlers={{
                holidayChange: props.eventHandlers.holidayChange,
              }}
            />
          );
        }
        return listItem;
      })
    );
  }, [props.belief, props.holiday, props.eventHandlers.holidayChange]);

  function beliefGroupClicked(e) {
    let inactive, active;

    inactive = e.target.className === "beliefGroup";
    active = e.target.className === "beliefGroup-Active";
    if (inactive) {
      e.target.className = "beliefGroup-Active";
    } else if (active) {
      e.target.className = "beliefGroup";
    }
  }

  return (
    <ul className="holidaySelectPane" onClick={beliefGroupClicked}>
      {groupList}
    </ul>
  );
}

export default HolidaySelectPane;
