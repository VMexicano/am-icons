import React from 'react';
import Euro_ from './../Icons/euro.svg';
const Euro = (props) => {
  return (
    <img src={Euro_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Euro;
