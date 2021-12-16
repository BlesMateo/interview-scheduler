import React from "react";

import classNames from "classnames";

import "components/InterviewerListItem.scss";

/* Shows the interviewer and their avatar for a selected day */
export default function InterviewListItem(props) {
  let interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
