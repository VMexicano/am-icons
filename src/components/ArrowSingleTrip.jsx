import React from 'react';
import ArrowSingleTrip_ from './../Icons/arrowSingleTrip.svg';
const ArrowSingleTrip = (props) => {
  return (
    <img src={ArrowSingleTrip_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowSingleTrip;
