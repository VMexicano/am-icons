import React from 'react';
import Sausage_ from './../Icons/sausage.svg';
const Sausage = (props) => {
  return (
    <img src={Sausage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sausage;
