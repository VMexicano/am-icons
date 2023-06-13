import React from 'react';
import Calendar_ from './../Icons/calendar.svg';
const Calendar = (props) => {
  return (
    <img src={Calendar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Calendar;
