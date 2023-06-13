import React from 'react';
import Andorra_ from './../Icons/andorra.svg';
const Andorra = (props) => {
  return (
    <img src={Andorra_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Andorra;
