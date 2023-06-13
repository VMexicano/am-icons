import React from 'react';
import Egg2_ from './../Icons/egg2.svg';
const Egg2 = (props) => {
  return (
    <img src={Egg2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Egg2;
