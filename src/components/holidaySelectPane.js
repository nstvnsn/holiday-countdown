import React, { useEffect, useState } from "react";

import BeliefGroup from "../components/beliefGroup";
import holidayDates from "../data/dates.json";

import "../css/holidaySelectPane.css";

function HolidaySelectPane(props) {
  let [beliefGroupList, setBeliefGroupList] = useState([]);

  useEffect(() => {
    let listOfBeliefs = Object.keys(holidayDates);

    setBeliefGroupList(
      listOfBeliefs.map((key, i) => {
        return (
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
      {beliefGroupList}
    </ul>
  );
}

export default HolidaySelectPane;
