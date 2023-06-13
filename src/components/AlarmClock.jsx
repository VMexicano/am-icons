import React from 'react';
import AlarmClock_ from './../Icons/alarmClock.svg';
const AlarmClock = (props) => {
  return (
    <img src={AlarmClock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AlarmClock;
