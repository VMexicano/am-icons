import React from 'react';
import ChangesCalendar_ from './../Icons/changesCalendar.svg';
const ChangesCalendar = (props) => {
  return (
    <img src={ChangesCalendar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChangesCalendar;
