import React from 'react';
import Insurance_ from './../Icons/insurance.svg';
const Insurance = (props) => {
  return (
    <img src={Insurance_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Insurance;
