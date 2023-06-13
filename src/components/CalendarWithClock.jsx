import React from 'react';
import CalendarWithClock_ from './../Icons/calendarWithClock.svg';
const CalendarWithClock = (props) => {
  return (
    <img src={CalendarWithClock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalendarWithClock;
