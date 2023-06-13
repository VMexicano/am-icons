import React from 'react';
import ControlTower_ from './../Icons/controlTower.svg';
const ControlTower = (props) => {
  return (
    <img src={ControlTower_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ControlTower;
