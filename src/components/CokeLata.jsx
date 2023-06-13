import React from 'react';
import CokeLata_ from './../Icons/cokeLata.svg';
const CokeLata = (props) => {
  return (
    <img src={CokeLata_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CokeLata;
