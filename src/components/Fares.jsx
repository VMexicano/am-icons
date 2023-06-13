import React from 'react';
import Fares_ from './../Icons/fares.svg';
const Fares = (props) => {
  return (
    <img src={Fares_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fares;
