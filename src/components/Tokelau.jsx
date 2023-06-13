import React from 'react';
import Tokelau_ from './../Icons/tokelau.svg';
const Tokelau = (props) => {
  return (
    <img src={Tokelau_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tokelau;
