import React from 'react';
import BurkinaFaso_ from './../Icons/burkinaFaso.svg';
const BurkinaFaso = (props) => {
  return (
    <img src={BurkinaFaso_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BurkinaFaso;
