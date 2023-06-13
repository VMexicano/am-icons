import React from 'react';
import Mauritius_ from './../Icons/mauritius.svg';
const Mauritius = (props) => {
  return (
    <img src={Mauritius_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mauritius;
