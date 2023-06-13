import React from 'react';
import RoundTripSmall_ from './../Icons/roundTripSmall.svg';
const RoundTripSmall = (props) => {
  return (
    <img src={RoundTripSmall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RoundTripSmall;
