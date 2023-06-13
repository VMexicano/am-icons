import React from 'react';
import Peanuts_ from './../Icons/peanuts.svg';
const Peanuts = (props) => {
  return (
    <img src={Peanuts_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Peanuts;
