import React from 'react';
import PhoneLine_ from './../Icons/phoneLine.svg';
const PhoneLine = (props) => {
  return (
    <img src={PhoneLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PhoneLine;
