import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

/* Appointment component*/
export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // Save appointments
  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer,
    };
    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => transition(ERROR_SAVE, true));
  }
  // Delete appointments
  function deleteAppointment() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(() => transition(ERROR_DELETE, true));
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={
            props.interview.interviewer ? props.interview.interviewer : ""
          }
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}

      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETING && <Status message={"Deleting"} />}

      {mode === CONFIRM && (
        <Confirm
          onCancel={() => back()}
          message={"Are you sure you would like to delete?"}
          onConfirm={deleteAppointment}
        />
      )}

      {mode === EDIT && (
        <Form
          interviewer={
            props.interview.interviewer ? props.interview.interviewer.id : ""
          }
          interviewers={props.interviewers}
          student={props.interview.student}
          onCancel={() => back()}
          onSave={save}
        />
      )}

      {mode === ERROR_SAVE && (
        <Error
          message={"Could not create appointment"}
          onClose={() => back()}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error
          message={"Could not cancel appointment"}
          onClose={() => back()}
        />
      )}
    </article>
  );
}
