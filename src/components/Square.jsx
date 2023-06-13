import React from 'react';
import Square_ from './../Icons/square.svg';
const Square = (props) => {
  return (
    <img src={Square_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Square;
