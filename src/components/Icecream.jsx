import React from 'react';
import Icecream_ from './../Icons/icecream.svg';
const Icecream = (props) => {
  return (
    <img src={Icecream_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Icecream;
