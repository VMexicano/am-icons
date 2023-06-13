import React from 'react';
import Kiribati_ from './../Icons/kiribati.svg';
const Kiribati = (props) => {
  return (
    <img src={Kiribati_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Kiribati;
