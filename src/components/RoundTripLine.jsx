import React from 'react';
import RoundTripLine_ from './../Icons/roundTripLine.svg';
const RoundTripLine = (props) => {
  return (
    <img src={RoundTripLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RoundTripLine;
