/* Get appointments for day function that returns an array of appointments for the given day*/
export function getAppointmentsForDay(state,day) {
const {days, appointments} = state;
  let appointment = [];
  const filteredDay = days.find(filter => filter.name === day);

  if (filteredDay) {
    appointment = filteredDay.appointments.map(id => appointments[id])

    }

    return appointment;
};

/* Get interview function that returns a new object containing the interview data when an object containing interviewer is passed*/
export function getInterview(state, interview) {
if(interview){
  return {
    "student": interview.student,
    "interviewer": state.interviewers[interview.interviewer]
  }
}
  return null
}
