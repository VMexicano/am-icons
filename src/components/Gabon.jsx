import React from 'react';
import Gabon_ from './../Icons/gabon.svg';
const Gabon = (props) => {
  return (
    <img src={Gabon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Gabon;
