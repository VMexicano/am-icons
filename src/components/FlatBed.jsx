import React from 'react';
import FlatBed_ from './../Icons/flatBed.svg';
const FlatBed = (props) => {
  return (
    <img src={FlatBed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FlatBed;
