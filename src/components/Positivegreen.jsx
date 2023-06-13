import React from 'react';
import Positivegreen_ from './../Icons/positivegreen.svg';
const Positivegreen = (props) => {
  return (
    <img src={Positivegreen_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Positivegreen;
