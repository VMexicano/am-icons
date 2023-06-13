import React from 'react';
import Hawaii_ from './../Icons/hawaii.svg';
const Hawaii = (props) => {
  return (
    <img src={Hawaii_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hawaii;
