import React from 'react';
import Headphones_ from './../Icons/headphones.svg';
const Headphones = (props) => {
  return (
    <img src={Headphones_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Headphones;
