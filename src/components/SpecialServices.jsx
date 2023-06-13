import React from 'react';
import SpecialServices_ from './../Icons/specialServices.svg';
const SpecialServices = (props) => {
  return (
    <img src={SpecialServices_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SpecialServices;
