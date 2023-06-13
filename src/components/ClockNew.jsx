import React from 'react';
import ClockNew_ from './../Icons/clockNew.svg';
const ClockNew = (props) => {
  return (
    <img src={ClockNew_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ClockNew;
