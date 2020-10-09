import React, { useEffect, useState } from "react";

function Holiday(props) {
  let [listItem, setListItem] = useState();

  useEffect(() => {
    if (props.active) {
      setListItem(
        <li key={props.id} style={{ backgroundColor: "green" }}>
          {props.holidayTitle}
        </li>
      );
    } else {
      setListItem(
        <li key={props.id} style={{ backgroundColor: "clear" }}>
          {props.holidayTitle}
        </li>
      );
    }
  }, [props.active, props.holidayTitle, props.id]);

  return [listItem];
}

export default Holiday;
