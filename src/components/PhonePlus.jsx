import React from 'react';
import PhonePlus_ from './../Icons/phonePlus.svg';
const PhonePlus = (props) => {
  return (
    <img src={PhonePlus_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PhonePlus;
