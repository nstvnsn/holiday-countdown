import React from "react";

import "../css/holiday.css";

function Holiday(props) {
  if (props.active) {
    return (
      <div
        key={props.id}
        className="holidayEntry-Active"
        onClick={holidayEntryClicked}
      >
        {props.holidayTitle}
      </div>
    );
  } else {
    return (
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
}

export default Holiday;
