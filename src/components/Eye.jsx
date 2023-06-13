import React from 'react';
import Eye_ from './../Icons/eye.svg';
const Eye = (props) => {
  return (
    <img src={Eye_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Eye;
