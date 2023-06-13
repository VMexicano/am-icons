import React from 'react';
import Flightplane_ from './../Icons/flightplane.svg';
const Flightplane = (props) => {
  return (
    <img src={Flightplane_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Flightplane;
