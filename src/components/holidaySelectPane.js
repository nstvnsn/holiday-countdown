import React, { useEffect, useState } from "react";
import BeliefGroup from "../components/beliefGroup";
import holidayDates from "../data/dates.json";

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
            />
          );
        } else {
          listItem = (
            <BeliefGroup
              active={false}
              holiday={props.holiday}
              belief={key}
              key={i}
            />
          );
        }
        return listItem;
      })
    );
  }, [props.belief, props.holiday]);

  return <ul className="holidaySelectPane">{groupList}</ul>;
}

export default HolidaySelectPane;
