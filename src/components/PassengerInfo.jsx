import React from 'react';
import PassengerInfo_ from './../Icons/passengerInfo.svg';
const PassengerInfo = (props) => {
  return (
    <img src={PassengerInfo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PassengerInfo;
