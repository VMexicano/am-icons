import React from 'react';
import Pencil2_ from './../Icons/pencil2.svg';
const Pencil2 = (props) => {
  return (
    <img src={Pencil2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Pencil2;
