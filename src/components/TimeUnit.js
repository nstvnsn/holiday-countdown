import React from "react";

import "../css/TimeUnit.css";

function TimeUnit(props) {
  return (
    <div className="timeUnit">
      <p>{props.time}</p>
      <p>{props.unit}</p>
    </div>
  );
}

export default TimeUnit;
