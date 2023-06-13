import React from 'react';
import ClockTimeBack_ from './../Icons/clockTimeBack.svg';
const ClockTimeBack = (props) => {
  return (
    <img src={ClockTimeBack_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ClockTimeBack;
