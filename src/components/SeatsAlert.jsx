import React from 'react';
import SeatsAlert_ from './../Icons/seatsAlert.svg';
const SeatsAlert = (props) => {
  return (
    <img src={SeatsAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatsAlert;
