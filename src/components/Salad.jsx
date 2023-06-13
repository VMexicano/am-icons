import React from 'react';
import Salad_ from './../Icons/salad.svg';
const Salad = (props) => {
  return (
    <img src={Salad_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Salad;
