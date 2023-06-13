import React from 'react';
import AsientosYCabinas_ from './../Icons/asientosYCabinas.svg';
const AsientosYCabinas = (props) => {
  return (
    <img src={AsientosYCabinas_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AsientosYCabinas;
