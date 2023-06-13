import React from 'react';
import Castle_ from './../Icons/castle.svg';
const Castle = (props) => {
  return (
    <img src={Castle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Castle;
