import React from 'react';
import PCRNegative_ from './../Icons/pCRNegative.svg';
const PCRNegative = (props) => {
  return (
    <img src={PCRNegative_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PCRNegative;
