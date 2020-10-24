import React from "react";

import "../css/Holiday.css";

function Holiday(props) {
  return (
    <div
      className={(props.active && "holidayEntry-Active") || "holidayEntry"}
      onClick={holidayEntryClicked}
      style={{ cursor: "pointer" }}
    >
      {props.holidayTitle}
    </div>
  );

  function holidayEntryClicked(e) {
    const cName = e.target.className;
    if (["holidayEntry", "holidayEntry-Active"].includes(cName)) {
      props.eventHandlers.holidayChange(props.belief, props.holidayID);
    }
  }
}

export default Holiday;
