import React, { useEffect, useState } from "react";

import BeliefGroup from "../components/beliefGroup";
import holidayDates from "../data/dates.json";

function HolidaySelectPane(props) {
  let [activeHoliday, setActiveHoliday] = useState(props.activeHoliday);
  let [groupList, setGroupList] = useState([]);

  useEffect(() => {
    let listOfKeys = Object.keys(holidayDates);
    setGroupList(
      listOfKeys.map((key, i) => {
        return (
          <li key={i}>
            <BeliefGroup belief={key} />
          </li>
        );
      })
    );
  }, [activeHoliday]);

  return (
    <div className="holidaySelectPane">
      <ul>{groupList}</ul>
    </div>
  );
}

export default HolidaySelectPane;
