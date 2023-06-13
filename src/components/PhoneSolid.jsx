import React from 'react';
import PhoneSolid_ from './../Icons/phoneSolid.svg';
const PhoneSolid = (props) => {
  return (
    <img src={PhoneSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PhoneSolid;
