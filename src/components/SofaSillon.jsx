import React from 'react';
import SofaSillon_ from './../Icons/sofaSillon.svg';
const SofaSillon = (props) => {
  return (
    <img src={SofaSillon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SofaSillon;
