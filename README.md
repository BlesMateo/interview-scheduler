# Interview Scheduler

A React application that allows users to book and cancel interviews.

# Final Product

Users can book an interview in empty appointment slot and switch between weekdays
!["Booking and Switching Interviews"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Create%20and%20Switch%201.png)
!["Booking and Switching Interviews"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Create%20and%20Switch%202.png)
!["Booking and Switching Interviews"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Create%20and%20Switch%203.png)

Users can edit appointments, which will save and update.
!["Editing student name and saving"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Edit%201.png)
!["Editing student name and saving"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Edit%202.png)
!["Editing student name and saving"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Edit%203.png)
!["Editing student name and saving"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Edit%204.png)

Users can cancel appointments, which will save and update.
!["Cancelling appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Cancel%20Appointment%201.png)
!["Cancelling appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Cancel%20Appointment%202.png)
!["Cancelling appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Cancel%20Appointment%203.png)
!["Cancelling appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Cancel%20Appointment%204.png)

A user is shown an error if an interview cannot be saved or deleted.
!["Cannot save or delete appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Create%20Error%201.png)
!["Cannot save or delete appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Create%20Error%202.png)
!["Cannot save or delete appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Create%20Error%203.png)
!["Cannot save or delete appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Cancel%20Error%201.png)
!["Cannot save or delete appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Cancel%20Error%202.png)
!["Cannot save or delete appointments"](https://github.com/BlesMateo/interview-scheduler/blob/master/docs/Cancel%20Error%203.png)

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
