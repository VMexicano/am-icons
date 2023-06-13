import React from 'react';
import Mexico_ from './../Icons/mexico.svg';
const Mexico = (props) => {
  return (
    <img src={Mexico_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mexico;
