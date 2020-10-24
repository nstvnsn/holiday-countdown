import React, { useEffect, useState } from "react";

import BeliefGroup from "../components/BeliefGroup";

import holidayData from "../data/dates.json";
import "../css/HolidaySelectPane.css";

function HolidaySelectPane(props) {
  const [beliefGroupList, setBeliefGroupList] = useState([]);

  useEffect(() => {
    let listOfBeliefs = Object.keys(holidayData);

    setBeliefGroupList(
      listOfBeliefs.map((key, i) => {
        return (
          <BeliefGroup
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
  }, [props.holiday, props.eventHandlers.holidayChange]);

  return <ul className="holidaySelectPane">{beliefGroupList}</ul>;
}

export default HolidaySelectPane;
