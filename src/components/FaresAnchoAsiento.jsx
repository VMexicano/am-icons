import React from 'react';
import FaresAnchoAsiento_ from './../Icons/faresAnchoAsiento.svg';
const FaresAnchoAsiento = (props) => {
  return (
    <img src={FaresAnchoAsiento_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresAnchoAsiento;
