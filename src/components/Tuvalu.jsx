import React from 'react';
import Tuvalu_ from './../Icons/tuvalu.svg';
const Tuvalu = (props) => {
  return (
    <img src={Tuvalu_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tuvalu;
