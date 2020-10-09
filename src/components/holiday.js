import React, { useEffect, useState } from "react";

import "../css/holiday.css";

function Holiday(props) {
  let [listItem, setListItem] = useState();

  useEffect(() => {
    if (props.active) {
      setListItem(
        <div
          key={props.id}
          className="holidayEntry-Active"
          onClick={holidayEntryClicked}
        >
          {props.holidayTitle}
        </div>
      );
    } else {
      setListItem(
        <div
          key={props.id}
          className="holidayEntry"
          onClick={holidayEntryClicked}
        >
          {props.holidayTitle}
        </div>
      );
    }
    function holidayEntryClicked(e) {
      props.eventHandlers.holidayChange(props.belief, props.holidayID);
    }
  }, [
    props.active,
    props.belief,
    props.eventHandlers,
    props.holidayID,
    props.holidayTitle,
    props.id,
  ]);

  return [listItem];
}

export default Holiday;
