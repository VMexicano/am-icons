import React from 'react';
import Wind_ from './../Icons/wind.svg';
const Wind = (props) => {
  return (
    <img src={Wind_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Wind;
