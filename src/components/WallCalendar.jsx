import React from 'react';
import WallCalendar_ from './../Icons/wallCalendar.svg';
const WallCalendar = (props) => {
  return (
    <img src={WallCalendar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WallCalendar;
