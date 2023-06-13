import React from 'react';
import Highway_ from './../Icons/highway.svg';
const Highway = (props) => {
  return (
    <img src={Highway_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Highway;
