import React from 'react';
import Muffin_ from './../Icons/muffin.svg';
const Muffin = (props) => {
  return (
    <img src={Muffin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Muffin;
