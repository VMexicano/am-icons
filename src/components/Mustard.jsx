import React from 'react';
import Mustard_ from './../Icons/mustard.svg';
const Mustard = (props) => {
  return (
    <img src={Mustard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mustard;
