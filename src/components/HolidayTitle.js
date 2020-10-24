import React from "react";

import holidayData from "../data/dates.json";
import "../css/HolidayTitle.css";

function HolidayTitle(props) {
  return <div>{holidayData[props.belief][props.holiday].name}</div>;
}

export default HolidayTitle;
