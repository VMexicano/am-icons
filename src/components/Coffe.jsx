import React from 'react';
import Coffe_ from './../Icons/coffe.svg';
const Coffe = (props) => {
  return (
    <img src={Coffe_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Coffe;
