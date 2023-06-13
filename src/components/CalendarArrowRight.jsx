import React from 'react';
import CalendarArrowRight_ from './../Icons/calendarArrowRight.svg';
const CalendarArrowRight = (props) => {
  return (
    <img src={CalendarArrowRight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalendarArrowRight;
