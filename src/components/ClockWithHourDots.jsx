import React from 'react';
import ClockWithHourDots_ from './../Icons/clockWithHourDots.svg';
const ClockWithHourDots = (props) => {
  return (
    <img src={ClockWithHourDots_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ClockWithHourDots;
