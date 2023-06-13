import React from 'react';
import Diners_ from './../Icons/diners.svg';
const Diners = (props) => {
  return (
    <img src={Diners_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Diners;
