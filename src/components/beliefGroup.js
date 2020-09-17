import React, { useEffect, useState } from "react";

import holidayDates from "../data/dates.json";

function BeliefGroup(props) {
  let [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    let listOfKeys = Object.keys(holidayDates[props.belief]);
    setHolidayList(
      listOfKeys.map((key, i) => {
        return <li key={i}>{holidayDates[props.belief][key].name}</li>;
      })
    );
  }, []);

  return (
    <div className="beliefGroup">
      <span>{props.belief}</span>
      <ul hidden>{holidayList}</ul>
    </div>
  );
}
document.addEventListener("click", (e) => {
  console.log(e.target);
  let list = document.getElementsByClassName("beliefGroup")[1].lastChild;
  if (list.hasAttribute("hidden")) {
    list.removeAttribute("hidden");
  } else {
    let attr = document.createAttribute("hidden");
    list.setAttributeNode(attr);
  }
});

export default BeliefGroup;
