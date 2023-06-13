import React from 'react';
import CalendarMonth_ from './../Icons/calendarMonth.svg';
const CalendarMonth = (props) => {
  return (
    <img src={CalendarMonth_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalendarMonth;
