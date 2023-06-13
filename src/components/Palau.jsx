import React from 'react';
import Palau_ from './../Icons/palau.svg';
const Palau = (props) => {
  return (
    <img src={Palau_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Palau;
