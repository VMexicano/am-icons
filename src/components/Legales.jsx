import React from 'react';
import Legales_ from './../Icons/legales.svg';
const Legales = (props) => {
  return (
    <img src={Legales_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Legales;
