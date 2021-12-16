import React from "react";
import DayListItem from "./DayListItem";

/* Shows avaiable appointment spots with the list of days */
export default function DayList(props) {
  const dayArr = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    );
  });

  return <ul>{dayArr}</ul>;
}
