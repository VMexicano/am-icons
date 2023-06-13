import React from 'react';
import Lab_ from './../Icons/lab.svg';
const Lab = (props) => {
  return (
    <img src={Lab_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lab;
