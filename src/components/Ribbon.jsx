import React from 'react';
import Ribbon_ from './../Icons/ribbon.svg';
const Ribbon = (props) => {
  return (
    <img src={Ribbon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ribbon;
