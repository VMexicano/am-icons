import React from 'react';
import Lupins_ from './../Icons/lupins.svg';
const Lupins = (props) => {
  return (
    <img src={Lupins_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lupins;
