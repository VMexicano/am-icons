import React from 'react';
import Facturacin_ from './../Icons/facturacin.svg';
const Facturacin = (props) => {
  return (
    <img src={Facturacin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Facturacin;
