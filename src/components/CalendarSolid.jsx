import React from 'react';
import CalendarSolid_ from './../Icons/calendarSolid.svg';
const CalendarSolid = (props) => {
  return (
    <img src={CalendarSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalendarSolid;
