import { useState, useEffect } from "react";
import axios from "axios";

/* useApplicationData component */
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  // Displays available spots for selected day
  const fetchUpdateSpots = (appointments) => {
    const appIds = state.days.filter((day) => day.name === state.day);
    const recentApp = appIds[0].appointments;
    const emptySpace = recentApp.filter(
      (app) => !appointments[app].interview
    ).length;
    return emptySpace;
  };

  // User books appointment causing spot availability to update and decrease
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = [...state.days];
    const dayIndex = state.days.findIndex((day) =>
      day.appointments.includes(id)
    );
    days[dayIndex].spots = fetchUpdateSpots(appointments);
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState((prev) => ({ ...prev, appointments, days }));
    });
  }

  // User cancels interview causing spot availability to update and increase
  function cancelInterview(id) {
    const appointment = { ...state.appointments[id], interview: null };
    const appointments = { ...state.appointments, [id]: appointment };
    const days = [...state.days];
    const dayIndex = state.days.findIndex((day) =>
      day.appointments.includes(id)
    );

    days[dayIndex].spots = fetchUpdateSpots(appointments);
    return axios.delete(`api/appointments/${id}`).then(() => {
      setState((prev) => ({ ...prev, appointments, days }));
    });
  }
  return { state, setDay, bookInterview, cancelInterview };
}
