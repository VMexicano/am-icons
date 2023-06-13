import React from 'react';
import Recipt1_ from './../Icons/recipt1.svg';
const Recipt1 = (props) => {
  return (
    <img src={Recipt1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Recipt1;
