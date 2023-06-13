import React from 'react';
import Delta_ from './../Icons/delta.svg';
const Delta = (props) => {
  return (
    <img src={Delta_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Delta;
