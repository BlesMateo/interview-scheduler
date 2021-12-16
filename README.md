# Interview Scheduler

A React application that allows users to book and cancel interviews.

# Final Product

Users can book an interview in empty appointment slot and switch between weekdays
!["Booking and Switching Interviews"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Create%20and%20Switch%20Appointment.gif)

Users can edit appointments, which will save and update.
!["Editing student name and saving"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Edit%20and%20Save.gif)

Users can cancel booked appointments, which will save and update.
!["Deleting appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Delete%20and%20Save.gif)

Users can cancel appointment registration.
!["Cancelling appointment booking"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Cancel%20Form.gif)

Users cannot register for an appointment without entering a name.
!["Error on form submission"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Error%20Empty%20Student%20Name.gif)

A user is shown an error if an interview cannot be saved or deleted.
[!"Cannot save interview"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Error%20on%20Create.gif)

!["Cannot delete interview"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Error%20on%20Delete.gif)

## Dependencies

- axios: "^0.24.0",
- classnames: "^2.2.6",
- normalize.css: "^8.0.1",
- react: "^16.9.0",
- react-hooks-testing-library: "^0.6.0",

## Setup

- Install dependencies with `npm install`.
- Run npm start in scheduler-api directory
- On a seperate window on terminal, run npm start in interview-scheduler directory.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
