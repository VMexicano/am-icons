import React from 'react';
import RoundTripSolid_ from './../Icons/roundTripSolid.svg';
const RoundTripSolid = (props) => {
  return (
    <img src={RoundTripSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RoundTripSolid;
