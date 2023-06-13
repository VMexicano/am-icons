import React from 'react';
import CalendarGrid_ from './../Icons/calendarGrid.svg';
const CalendarGrid = (props) => {
  return (
    <img src={CalendarGrid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalendarGrid;
