import React from 'react';
import FaresMenuBar_ from './../Icons/faresMenuBar.svg';
const FaresMenuBar = (props) => {
  return (
    <img src={FaresMenuBar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresMenuBar;
