import React from 'react';
import Aruba_ from './../Icons/aruba.svg';
const Aruba = (props) => {
  return (
    <img src={Aruba_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Aruba;
