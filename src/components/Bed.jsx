import React from 'react';
import Bed_ from './../Icons/bed.svg';
const Bed = (props) => {
  return (
    <img src={Bed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bed;
