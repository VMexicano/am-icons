import React from 'react';
import Campana_ from './../Icons/campana.svg';
const Campana = (props) => {
  return (
    <img src={Campana_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Campana;
