import React from 'react';
import Desinfection_ from './../Icons/desinfection.svg';
const Desinfection = (props) => {
  return (
    <img src={Desinfection_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Desinfection;
