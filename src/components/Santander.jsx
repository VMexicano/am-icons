import React from 'react';
import Santander_ from './../Icons/santander.svg';
const Santander = (props) => {
  return (
    <img src={Santander_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Santander;
