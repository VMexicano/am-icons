import React from 'react';
import CalendarArrowLeft_ from './../Icons/calendarArrowLeft.svg';
const CalendarArrowLeft = (props) => {
  return (
    <img src={CalendarArrowLeft_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalendarArrowLeft;
