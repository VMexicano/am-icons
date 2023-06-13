import React from 'react';
import CalendarDays_ from './../Icons/calendarDays.svg';
const CalendarDays = (props) => {
  return (
    <img src={CalendarDays_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalendarDays;
