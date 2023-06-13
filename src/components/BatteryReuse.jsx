import React from 'react';
import BatteryReuse_ from './../Icons/batteryReuse.svg';
const BatteryReuse = (props) => {
  return (
    <img src={BatteryReuse_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BatteryReuse;
