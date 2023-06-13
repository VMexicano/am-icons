import React from 'react';
import DamagedLithiumBatteries_ from './../Icons/damagedLithiumBatteries.svg';
const DamagedLithiumBatteries = (props) => {
  return (
    <img src={DamagedLithiumBatteries_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DamagedLithiumBatteries;
