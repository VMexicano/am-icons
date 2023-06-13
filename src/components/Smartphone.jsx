import React from 'react';
import Smartphone_ from './../Icons/smartphone.svg';
const Smartphone = (props) => {
  return (
    <img src={Smartphone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Smartphone;
