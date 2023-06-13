import React from 'react';
import CalendarLine_ from './../Icons/calendarLine.svg';
const CalendarLine = (props) => {
  return (
    <img src={CalendarLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalendarLine;
