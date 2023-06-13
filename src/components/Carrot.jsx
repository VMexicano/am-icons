import React from 'react';
import Carrot_ from './../Icons/carrot.svg';
const Carrot = (props) => {
  return (
    <img src={Carrot_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Carrot;
